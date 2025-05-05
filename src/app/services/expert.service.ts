import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expert } from '../models/expert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {
  private apiUrl = 'http://localhost:8080/api/expert'; // adapte si nécessaire

  constructor(private http: HttpClient) {}

  getExperts(): Observable<Expert[]> {
    return this.http.get<Expert[]>(this.apiUrl);
  }

  addExpert(expert: Expert): Observable<Expert> {
    return this.http.post<Expert>(this.apiUrl, expert);
  }

  updateExpert(expert: Expert): Observable<Expert> {
    return this.http.put<Expert>(`${this.apiUrl}/${expert.id}`, expert);
  }

  deleteExpert(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
