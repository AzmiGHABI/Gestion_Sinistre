import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormationService } from 'app/formation.service';
import { Formation } from './formation';

@Component({
  selector: 'formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations: Formation[] = [];
  constructor(private formationService :FormationService) { }

  ngOnInit(): void {
    this.getFormations();
  }

  public getFormations():void
  {
    this.formationService.getFormations().subscribe((response:Formation[])=>
    {
      console.log("res",response);
      this.formations = response;

    },
    (error: HttpErrorResponse) => {alert(error.message);}
    )
    ;
  }

}
