import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sinistre } from './etudiant/Sinistre';
import { Dossier } from './article/dossier';



@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiServerUrl = "http://localhost:8098/api/dossiers";
  
  
  constructor(private http : HttpClient) { }

 
  
 public getDossiers():Observable<Dossier[]>
 {  
   return this.http.get<Dossier[]>(`${this.apiServerUrl}`);
  }


 public addEtudiant(Etudiant :Sinistre):Observable<Sinistre>
  {
    return this.http.post<Sinistre>(`${this.apiServerUrl}/add`,Etudiant)
  }

  public updateEtudiant(Etudiant :Sinistre):Observable<Sinistre>
  {
    return this.http.put<Sinistre>(`${this.apiServerUrl}/update`,Etudiant)
  }


  public deleteEtudiant(id :number):Observable<void>
  {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`);
  }
  updateDossier(dossier: any): Observable<any> {
    return this.http.put(`http://localhost:8080/api/dossiers/${dossier.id}`, dossier);
  }
  
}
