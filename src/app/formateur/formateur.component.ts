import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'app/formateur.service';
import { Formateur } from './formateur';
import { Dossier } from 'app/article/dossier';
import { DossierService } from 'app/article/dossier.service';

@Component({
  selector: 'formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  public dossiers: Dossier[] = [];
  public declaredDossiers: Dossier[] = [];

  public selectedDossier?: Dossier;
  public showAffectationForm: boolean = false;

  // Champs du formulaire
  public gestionnaire: string = '';
  public dateAffectation: string = new Date().toISOString().substring(0, 10); // date aujourd'hui
  public priorite: string = 'Moyenne';
  public typeSinistre: string = '';
  public commentaire: string = '';

  constructor(private dossierService: DossierService) {}

  ngOnInit(): void {
    this.getDossiers();
  }

  public getDossiers(): void {
    this.dossierService.getDossiers().subscribe(
      (response: Dossier[]) => {
        console.log('Dossiers récupérés:', response);
        this.dossiers = response;
        this.declaredDossiers = this.dossiers;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getDossiersByEtat(etat: string): Dossier[] {
    return this.dossiers.filter(dossier => dossier?.statut == etat);
  }

  public openAffectationForm(dossier: Dossier): void {
    console.log("selected Dossier",dossier)
    this.selectedDossier = dossier;
    this.showAffectationForm = true;
  }

  public affecterDossier(): void {
    this.selectedDossier.statut = "SOUS_TRAITEMENT"
    console.log('Affectation envoyée :', this.selectedDossier);
    this.dossierService.addDossier(this.selectedDossier).subscribe(
      (response: Dossier) => {
        console.log('Dossier Affecté:', response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public cancelAffectation(): void {
    this.showAffectationForm = false;
    this.selectedDossier = undefined;
    this.selectedDossier.gestionnaire = '';
    this.selectedDossier.affectationDate = new Date().toISOString().substring(0, 10);
    this.selectedDossier.priority = 'Moyenne';
    this.selectedDossier.sinistreType = '';
    this.selectedDossier.commentaireExpert = '';
  }
}
