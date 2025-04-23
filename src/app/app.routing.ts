import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SitewebComponent } from './siteweb/siteweb.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component'; // Ajout de l'importation
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'declarationSinistre',
    component:ClientComponent,
  },
  
  {
    path: 'home',
    component: SitewebComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dossiers', // Ajout de la route pour afficher les dossiers
    component: ArticleComponent,
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true, // Conserve l'option pour éviter les erreurs de rechargement de page
    }),
  ],
  exports: [RouterModule], // Correction : ajout de RouterModule dans les exports
})

export class AppRoutingModule {}
