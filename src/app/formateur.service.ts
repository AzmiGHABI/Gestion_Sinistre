import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formateur } from './formateur/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  private apiServerUrl = "http://localhost:8098";
  
  
  constructor(private http : HttpClient) { }


  public getFormateurs():Observable<Formateur[]>
  {
    return this.http.get<Formateur[]>(`${this.apiServerUrl}/formateur`);
  }


 public addFormateur(Formateur :Formateur):Observable<Formateur>
  {
    return this.http.post<Formateur>(`${this.apiServerUrl}/formateur/add`,Formateur)
  }

  public updateFormateur(Formateur :Formateur):Observable<Formateur>
  {
    return this.http.put<Formateur>(`${this.apiServerUrl}/formateur/update`,Formateur)
  }


  public deleteFormateur(id :number):Observable<void>
  {
    return this.http.delete<void>(`${this.apiServerUrl}/formateur/delete/${id}`);
  }
}
