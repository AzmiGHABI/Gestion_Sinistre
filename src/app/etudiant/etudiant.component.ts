import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'app/etudiant.service';
import { Etudiant } from './etudiant';

@Component({
  selector: 'etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  etudiants : Etudiant[] = [];
  constructor(private EtudiantService :EtudiantService) { }

  ngOnInit(): void {
    this.getEtudiants();
  }

  public getEtudiants():void
  {
    this.EtudiantService.getEtudiants().subscribe((response:Etudiant[])=>
    {
      console.log("res",response);
      this.etudiants = response;

    },
    (error: HttpErrorResponse) => {alert(error.message);}
    )
    ;
  }

}
