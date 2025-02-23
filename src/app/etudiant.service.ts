import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sinistre } from './etudiant/Sinistre';



@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiServerUrl = "http://localhost:8098";
  
  
  constructor(private http : HttpClient) { }


  public getEtudiants():Observable<Sinistre[]>
  {
    return this.http.get<Sinistre[]>(`${this.apiServerUrl}/Etudiant`);
  }


 public addEtudiant(Etudiant :Sinistre):Observable<Sinistre>
  {
    return this.http.post<Sinistre>(`${this.apiServerUrl}/Etudiant/add`,Etudiant)
  }

  public updateEtudiant(Etudiant :Sinistre):Observable<Sinistre>
  {
    return this.http.put<Sinistre>(`${this.apiServerUrl}/Etudiant/update`,Etudiant)
  }


  public deleteEtudiant(id :number):Observable<void>
  {
    return this.http.delete<void>(`${this.apiServerUrl}/Etudiant/delete/${id}`);
  }
}
