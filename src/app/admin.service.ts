import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiServerUrl = "http://localhost:8098";
  
  
  constructor(private http : HttpClient) { }


  public getAdmins():Observable<Admin[]>
  {
    return this.http.get<Admin[]>(`${this.apiServerUrl}/Admin`);
  }


 public addAdmin(Admin :Admin):Observable<Admin>
  {
    return this.http.post<Admin>(`${this.apiServerUrl}/Admin/add`,Admin)
  }

  public updateAdmin(Admin :Admin):Observable<Admin>
  {
    return this.http.put<Admin>(`${this.apiServerUrl}/Admin/update`,Admin)
  }


  public deleteAdmin(id :number):Observable<void>
  {
    return this.http.delete<void>(`${this.apiServerUrl}/Admin/delete/${id}`);
  }
}
