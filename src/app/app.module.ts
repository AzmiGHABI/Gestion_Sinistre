import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Angular Material Modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// Google Maps
import { AgmCoreModule } from '@agm/core';

// App Routing and Modules
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ChatbotModule } from './client/chatbot.module';

// App Components
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FormateurComponent } from './formateur/formateur.component';
import { AdminComponent } from './admin/admin.component';
import { SitewebComponent } from './siteweb/siteweb.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { FoldersComponent } from './folders/folders.component';
import { AffectationDialogComponent } from './affectation-dialog/affectation-dialog.component';
import { GererexpertComponent } from './gererexpert/gererexpert.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FormateurComponent,
    AdminComponent,
    SitewebComponent,
    LoginComponent,
    ClientComponent,
    FoldersComponent,
    AffectationDialogComponent,
    GererexpertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]), // ⚠️ Doit exister pour router-outlet/routerLink
    AppRoutingModule,
    ComponentsModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    ChatbotModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
