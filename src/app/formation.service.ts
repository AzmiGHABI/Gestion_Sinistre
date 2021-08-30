import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from './formation/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private apiServerUrl = "http://localhost:8098";
  
  
  constructor(private http : HttpClient) { }


  public getFormations():Observable<Formation[]>
  {
    return this.http.get<Formation[]>(`${this.apiServerUrl}/Formation`);
  }


 public addFormation(formation :Formation):Observable<Formation>
  {
    return this.http.post<Formation>(`${this.apiServerUrl}/Formation/add`,formation)
  }

  public updateFormation(formation :Formation):Observable<Formation>
  {
    return this.http.put<Formation>(`${this.apiServerUrl}/Formation/update`,formation)
  }


  public deleteFormation(id :number):Observable<void>
  {
    return this.http.delete<void>(`${this.apiServerUrl}/Formation/delete/${id}`);
  }
}
