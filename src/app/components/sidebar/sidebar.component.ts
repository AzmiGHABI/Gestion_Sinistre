import { Component, OnInit } from '@angular/core';
import { ROUTES } from 'app/dashboard/dashboard.component';

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
