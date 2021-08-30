import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from './etudiant/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiServerUrl = "http://localhost:8098";
  
  
  constructor(private http : HttpClient) { }


  public getEtudiants():Observable<Etudiant[]>
  {
    return this.http.get<Etudiant[]>(`${this.apiServerUrl}/Etudiant`);
  }


 public addEtudiant(Etudiant :Etudiant):Observable<Etudiant>
  {
    return this.http.post<Etudiant>(`${this.apiServerUrl}/Etudiant/add`,Etudiant)
  }

  public updateEtudiant(Etudiant :Etudiant):Observable<Etudiant>
  {
    return this.http.put<Etudiant>(`${this.apiServerUrl}/Etudiant/update`,Etudiant)
  }


  public deleteEtudiant(id :number):Observable<void>
  {
    return this.http.delete<void>(`${this.apiServerUrl}/Etudiant/delete/${id}`);
  }
}
