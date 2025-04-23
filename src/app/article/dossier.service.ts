import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dossier } from './dossier';

@Injectable({
  providedIn: 'root'
})
export class DossierService {
  private apiServerUrl = "http://localhost:8098/api";

  constructor(private http: HttpClient) {}

  public getDossiers(): Observable<Dossier[]> {
    return this.http.get<Dossier[]>(`${this.apiServerUrl}/dossiers`);
  }

  public addDossier(dossier: any): Observable<any> {
    if (dossier instanceof FormData) {
      return this.http.post<any>(`${this.apiServerUrl}/dossiers`, dossier);
    } else {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(`${this.apiServerUrl}/dossiers`, dossier, { headers });
    }
  }

  public updateDossier(dossier: Dossier): Observable<Dossier> {
    return this.http.put<Dossier>(`${this.apiServerUrl}/dossiers/update`, dossier);
  }

  public deleteDossier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/dossiers/delete/${id}`);
  }

  public getExpertsByRegion(region: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiServerUrl}/expert/getByRegion/${region}`);
  }
  public getAllExperts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiServerUrl}/expert`);
  }
  uploadRapportPDF(formData: FormData): Observable<void> {
    return this.http.post<void>('http://localhost:8080/api/dossiers/upload-pdf', formData);
  }
  
  
}
  