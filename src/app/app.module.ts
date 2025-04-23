import { ChatbotModule } from './client/chatbot.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FormateurComponent } from './formateur/formateur.component';
import { AdminComponent } from './admin/admin.component';
import { SitewebComponent } from './siteweb/siteweb.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { FoldersComponent } from './folders/folders.component';
import { AffectationDialogComponent } from './affectation-dialog/affectation-dialog.component';



 // ✅ bon chemin ici

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ChatbotModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FormateurComponent,
    AdminComponent,
    SitewebComponent,
    LoginComponent,
    ClientComponent,
    FoldersComponent,
    AffectationDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
