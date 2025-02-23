import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { FormationComponent } from 'app/formation/formation.component';

import { FormateurComponent } from 'app/formateur/formateur.component';
import { AdminService } from 'app/admin.service';
import { AdminComponent } from 'app/admin/admin.component';
import { ArticleComponent } from 'app/article/article.component';
import { ExpertComponent } from './expert/expert.component';


export const AdminLayoutRoutes: Routes = [
  
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'article',         component: ArticleComponent },
    { path: 'formation',      component:FormationComponent },
    { path: 'admin',          component:AdminComponent},
    { path: 'gestionnaire',      component:FormateurComponent },

    { path: 'notifications',  component: NotificationsComponent },
    { path: 'expert',  component: ExpertComponent },
  
];
