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

  constructor(private router: Router, private dashboardService: DashboardService) {}

  ngOnInit(): void {
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
}

// Export routes pour le sidebar/navbar
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/gestionnaire', title: 'Gestionnaire', icon: 'engineering', class: '' },
  { path: '/expert', title: 'Expert', icon: 'group', class: '' },
  { path: '/folders', title: 'Dossier', icon: 'library_books', class: '' }
];
