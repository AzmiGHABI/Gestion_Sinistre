import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class Dossier {
  
    private apiServerUrl = "http://localhost:8098";
    
    
    constructor(private http : HttpClient) { }
  
  
    public getAdmins():Observable<Dossier[]>
    {
      return this.http.get<Dossier[]>(`${this.apiServerUrl}/Admin`);
    }
  
  
   public addAdmin(Admin :Dossier):Observable<Dossier>
    {
      return this.http.post<Dossier>(`${this.apiServerUrl}/Admin/add`,Admin)
    }
  
    public updateAdmin(Admin :Dossier):Observable<Dossier>
    {
      return this.http.put<Dossier>(`${this.apiServerUrl}/Admin/update`,Admin)
    }
  
  
    public deleteAdmin(id :number):Observable<void>
    {
      return this.http.delete<void>(`${this.apiServerUrl}/Admin/delete/${id}`);
    }
  }
  