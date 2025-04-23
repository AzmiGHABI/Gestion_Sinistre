import { Component, OnInit } from '@angular/core'; 
import { HttpErrorResponse } from '@angular/common/http';
import { Dossier } from './dossier';
import { DossierService } from './dossier.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public dossiers: Dossier[] = [];

  constructor(private dossierService: DossierService) {}

  ngOnInit(): void {
    this.getDossiers();
  }

  public getDossiers(): void {
    this.dossierService.getDossiers().subscribe(
      (response: Dossier[]) => {
        console.log('Dossiers récupérés:', response);
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
}
