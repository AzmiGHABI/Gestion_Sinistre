import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { RouteInfo } from 'app/components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  totalDossiersTraites: number = 0;
  dossiersParGestionnaire: any[] = [];
  dossiersParExpert: any[] = [];
  allRoutes: RouteInfo[] = [
    { path: '/declarationSinistre', title: 'Client Side', icon: 'dashboard', class: '' },
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/gestionnaire', title: 'Gestionnaire', icon: 'engineering', class: '' },
    { path: '/expert', title: 'Expert', icon: 'group', class: '' },
    { path: '/folders', title: 'Dossier', icon: 'library_books', class: '' }
  ];

  routes: RouteInfo[] = [];
  

  constructor(private router: Router, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.routes = this.getRoutesByRole();
    this.loadDashboardStats();
  }

  loadDashboardStats(): void {
    this.dashboardService.getDashboardStats().subscribe(
      (data) => {
        this.totalDossiersTraites = data.totalDossiersTraites;
        this.dossiersParGestionnaire = data.dossiersParGestionnaire;
        this.dossiersParExpert = data.dossiersParExpert;
      },
      (error) => {
        console.error('Erreur lors du chargement des statistiques :', error);
      }
    );
  }

  goToClientInterface() {
    this.router.navigate(['./declarationSinistre']);
  }
  isGestionnaire(): boolean {
    const roles = JSON.parse(sessionStorage.getItem('client') || '[]');
    return roles.includes('gestionnaire'); // ou 'ROLE_gestionnaire' selon ce que tu stockes
  }
  getRoutesByRole(): RouteInfo[] {
    const roles = JSON.parse(sessionStorage.getItem('client') || '[]');

    return this.allRoutes.filter(route => {
      if (route.path === '/gestionnaire') return roles.includes('gestionnaire');
      if (route.path === '/gestionnaire') return roles.includes('gestionnaire');
      if (route.path === '/expert') return roles.includes('expert');
      if (route.path === '/declarationSinistre') return roles.includes('api-user');
      
      return true; // dashboard, folders visible à tous
    });
  }
}


