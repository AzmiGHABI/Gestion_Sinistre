import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'app/formateur.service';
import { Formateur } from './formateur';

@Component({
  selector: 'formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  formateurs : Formateur[] = [];
  constructor(private formateurService :FormateurService) { }

  ngOnInit(): void {
    this.getformateurs();
  }

  public getformateurs():void
  {
    this.formateurService.getFormateurs().subscribe((response:Formateur[])=>
    {
      console.log("res",response);
      this.formateurs = response;

    },
    (error: HttpErrorResponse) => {alert(error.message);}
    )
    ;
  }
}
