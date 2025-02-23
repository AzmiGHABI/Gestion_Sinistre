import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Profile',  icon:'person', class: '' },
    { path: '/admin', title: 'Administrateur',  icon:'engineering', class: '' },
    { path: '/expert', title: 'Expert',  icon:'group', class: '' },
   // { path: '/formateur', title: 'Gestionnaire',  icon:'record_voice_over', class: '' },
    //{ path: '/formation', title: 'Formation',  icon:'library_books', class: '' },
    { path: '/article', title: 'Article',  icon:'library_books', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    
    
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
