import { Component, OnInit } from '@angular/core';


declare const $: any;
export declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  allRoutes: RouteInfo[] = [
    { path: '/declarationSinistre', title: 'Client Side', icon: 'dashboard', class: '' },
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/gestionnaire', title: 'Gestionnaire', icon: 'engineering', class: '' },
    { path: '/expert', title: 'Expert', icon: 'group', class: '' },
    { path: '/folders', title: 'Dossier', icon: 'library_books', class: '' }
  ];
  routes: RouteInfo[] = [];

  constructor() { }

  ngOnInit() {
    this.routes = this.getRoutesByRole();
    this.menuItems = this.routes.filter(menuItem => menuItem);
  }
  getRoutesByRole(): RouteInfo[] {
    const roles = JSON.parse(sessionStorage.getItem('client') || '[]');

    return this.allRoutes.filter(route => {
      if (route.path === '/gestionnaire') return roles.includes('gestionnaire');
      if (route.path === '/dashboard') return roles.includes('gestionnaire');
      if (route.path === '/expert') return roles.includes('expert');
      if (route.path === '/declarationSinistre') return roles.includes('api-user');
      return true; // dashboard, folders visible à tous
    });
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
