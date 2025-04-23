import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DossierService } from 'app/article/dossier.service';
import { Dossier } from 'app/article/dossier';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {

  public dossiers: Dossier[] = [];
  public selectedDossier?: Dossier;
  public showAffectationForm: boolean = false;

  constructor(private dossierService: DossierService) {}

  ngOnInit(): void {
    this.getDossiers();
  }

  public getDossiers(): void {
    this.dossierService.getDossiers().subscribe(
      (response: Dossier[]) => {
        this.dossiers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getDossiersByEtat(etat: string): Dossier[] {
    return this.dossiers.filter(dossier => dossier?.statut === etat);
  }

  public openAffectationForm(dossier: Dossier): void {
    this.selectedDossier = { ...dossier }; // Cloner pour éviter les effets directs
    this.showAffectationForm = true;
  }

  public affecterDossier(): void {
    if (this.selectedDossier) {
      this.selectedDossier.statut = "SOUS_TRAITEMENT";

      this.dossierService.addDossier(this.selectedDossier).subscribe(
        (response: Dossier) => {
          console.log('Dossier modifié par l\'expert:', response);
          this.getDossiers(); // Refresh
          this.showAffectationForm = false;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }

  public cancelAffectation(): void {
    this.showAffectationForm = false;
    this.selectedDossier = undefined;
  }

  public onFileSelected(event: any, dossier: Dossier): void {
    const file: File = event.target.files[0];

    if (file && file.type === 'application/pdf') {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('dossierId', dossier.id.toString());

      this.dossierService.uploadRapportPDF(formData).subscribe({
        next: () => {
          alert('✅ Rapport PDF ajouté avec succès.');
        },
        error: (err: HttpErrorResponse) => {
          alert('❌ Erreur lors de l\'upload : ' + err.message);
        }
      });
    } else {
      alert('📄 Veuillez choisir un fichier PDF valide.');
    }
  }
}

