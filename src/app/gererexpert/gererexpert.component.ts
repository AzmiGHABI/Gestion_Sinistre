import { Component, OnInit } from '@angular/core';
import { Expert } from '../models/expert';
import { ExpertService } from '../services/expert.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-gererexpert',
  templateUrl: './gererexpert.component.html',
  styleUrls: ['./gererexpert.component.css']
})
export class GererexpertComponent implements OnInit {
  experts: Expert[] = [];
  selectedExpert: Expert = this.emptyExpert();
  isEditing = false;
  searchTerm: string = ''; // ✅ Barre de recherche

  constructor(
    private expertService: ExpertService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadExperts();
  }

  loadExperts(): void {
    this.expertService.getExperts().subscribe({
      next: (data) => this.experts = data,
      error: (err) => alert('Erreur chargement : ' + err.message)
    });
  }

  get filteredExperts(): Expert[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.experts;
    return this.experts.filter(e =>
      e.nom.toLowerCase().includes(term) ||
      e.prenom.toLowerCase().includes(term) ||
      e.email.toLowerCase().includes(term)
    );
  }

  saveExpert(): void {
    const action = this.isEditing
      ? this.expertService.updateExpert(this.selectedExpert)
      : this.expertService.addExpert(this.selectedExpert);
  
    const message = this.isEditing
      ? '✅ Expert modifié avec succès.'
      : '✅ Expert ajouté avec succès.';
  
    action.subscribe(() => {
      this.loadExperts();
      this.resetForm();
      this.snackBar.open(message, 'Fermer', {
        duration: 3000,
        verticalPosition: 'top'
      });
    });
  }
  

  editExpert(expert: Expert): void {
    this.selectedExpert = { ...expert };
    this.isEditing = true;
  }

  deleteExpert(id: number): void {
    if (confirm('Confirmer la suppression ?')) {
      this.expertService.deleteExpert(id).subscribe(() => this.loadExperts());
    }
  }

  resetForm(): void {
    this.selectedExpert = this.emptyExpert();
    this.isEditing = false;
  }

  private emptyExpert(): Expert {
    return {
      nom: '', prenom: '', email: '', cin: '',
      numTel: '', adresse: '', region: ''
    };
  }
}
