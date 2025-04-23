import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Dossier } from 'app/article/dossier';
import { DossierService } from 'app/article/dossier.service';

@Component({
  selector: 'app-affectation-dialog',
  templateUrl: './affectation-dialog.component.html'
})
export class AffectationDialogComponent implements OnInit {
  filteredExperts: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<AffectationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { dossier: Dossier, experts: string[], regions: string[] },
    private dossierService: DossierService
  ) {}

  ngOnInit(): void {
     console.log("region",this.data.dossier.lieuSinistre)
    if (this.data.dossier.lieuSinistre) {
      this.onRegionChange(this.data.dossier.lieuSinistre);
    }
  }

  onRegionChange(region: string): void {
    this.dossierService.getExpertsByRegion(region).subscribe({
      next: (experts: string[]) => {
        this.filteredExperts = experts;
        // Si l'expert précédemment sélectionné n'est plus dans la liste, on le vide
        // if (!this.filteredExperts.includes(this.data.dossier.gestionnaire)) {
        //   this.data.dossier.gestionnaire = '';
        // }
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des experts:', err);
        this.filteredExperts = [];
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log("dossier",this.data.dossier)
    this.dialogRef.close(this.data.dossier);
  }
}
