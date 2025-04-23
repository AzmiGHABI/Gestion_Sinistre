import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  expert = {
    nom: 'Ghabi',
    prenom: 'Azmi',
    email: 'azmighabi@gmail.com',
    telephone: '+216 5454654654',
    adresse: 'Tunis, Tunisie'
  };

  constructor() { }

  ngOnInit() {
  }

}
