import { Component } from '@angular/core';
import { DossierService } from 'app/article/dossier.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  public regions: string[] = [
    'Tunis', 'Ariana', 'Ben Arous', 'La Manouba', 'Nabeul',
    'Zaghouan', 'Bizerte', 'Beja', 'Jendouba', 'Kef',
    'Siliana', 'Sousse', 'Monastir', 'Mahdia', 'Kairouan',
    'Kasserine', 'Sidi Bouzid', 'Sfax Ville', 'Sfax Sud',
    'Sfax Ouest', 'Gabes', 'Medenine', 'Tataouine',
    'Gafsa', 'Tozeur', 'Kebili'
  ];

  sinistre: any = {
    nom: '',
    prenom: '',
    email: '',
    cin: '',
    dateSinistre: '',
    numeroImmatriculation: '',
    lieuSinistre: '',
    photoVehicule: null,
    commentaireClient: '',
    statut: 'Declared'
  };

  message: string = '';
  isSuccess: boolean = false;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private dossierService: DossierService,
    private router: Router
  ) {}

  handleQuickAction(action: string) {
    switch(action) {
      case 'declarer':
        // Déjà sur la page de déclaration
        break;
      case 'suivre':
        this.router.navigate(['/dossiers']);
        break;
      case 'contact':
        window.open('tel:71100100');
        break;
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.sinistre.photoVehicule = file;
      
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    
    Object.keys(this.sinistre).forEach(key => {
      if (key === 'photoVehicule' && this.sinistre[key]) {
        formData.append(key, this.sinistre[key], this.sinistre[key].name);
      } else {
        formData.append(key, this.sinistre[key]);
      }
    });

    this.dossierService.addDossier(this.sinistre).subscribe(
      (response: any) => {
        console.log("Dossier ajouté :", response);
        this.message = "Votre déclaration a été envoyée avec succès !";
        this.isSuccess = true;
        this.resetForm();
      },
      (error: HttpErrorResponse) => {
        this.message = "Une erreur s'est produite lors de l'envoi de votre déclaration. Veuillez réessayer.";
        this.isSuccess = false;
        console.error(error);
      }
    );
  }

  resetForm() {
    this.sinistre = {
      nom: '',
      prenom: '',
      email: '',
      cin: '',
      dateSinistre: '',
      numeroImmatriculation: '',
      lieuSinistre: '',
      photoVehicule: null,
      commentaireClient: '',
      statut: 'Declared'
    };
    this.imagePreview = null;
  }
}