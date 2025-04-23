import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Dossier } from 'app/article/dossier';
import { DossierService } from 'app/article/dossier.service';
import { MatDialog } from '@angular/material/dialog';
import { AffectationDialogComponent } from '../affectation-dialog/affectation-dialog.component';

@Component({
  selector: 'folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  public dossiers: Dossier[] = [];
  public declaredDossiers: Dossier[] = [];
  public selectedDossier?: Dossier;

  public experts: any[] = [];

  public regions: string[] = [
    'Tunis', 'Ariana', 'Ben Arous', 'La Manouba', 'Nabeul',
    'Zaghouan', 'Bizerte', 'Beja', 'Jendouba', 'Kef',
    'Siliana', 'Sousse', 'Monastir', 'Mahdia', 'Kairouan',
    'Kasserine', 'Sidi Bouzid', 'Sfax Ville', 'Sfax Sud',
    'Sfax Ouest', 'Gabes', 'Medenine', 'Tataouine',
    'Gafsa', 'Tozeur', 'Kebili'
  ];

  constructor(
    private dossierService: DossierService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    // Charger les experts
    this.dossierService.getAllExperts().subscribe({
      next: (data) => {
        this.experts = data;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erreur lors du chargement des experts :', err.message);
      }
    });

    // Charger les dossiers
    this.getDossiers();
  }

  public getDossiers(): void {
    this.dossierService.getDossiers().subscribe(
      (response: Dossier[]) => {
        this.dossiers = response;
        this.declaredDossiers = this.dossiers;
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
    const dialogRef = this.dialog.open(AffectationDialogComponent, {
      width: '600px',
      data: {
        dossier: { ...dossier },
        experts: this.experts,
        regions: this.regions
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedDossier = result;
        this.affecterDossier();
      }
    });
  }

  public affecterDossier(): void {
    if (this.selectedDossier) {
      this.selectedDossier.statut = 'SOUS_TRAITEMENT';
      this.dossierService.addDossier(this.selectedDossier).subscribe(
        (response: Dossier) => {
          console.log('Dossier Affecté:', response);
          this.getDossiers();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }
}

