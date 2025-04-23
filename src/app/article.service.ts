import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dossier } from './article/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiServerUrl = "http://localhost:8098";
  
  
  constructor(private http : HttpClient) { }


  public getArticles():Observable<Dossier[]>
  {
    return this.http.get<Dossier[]>(`${this.apiServerUrl}/Article`);
  }


 public addArticle(Article :Dossier):Observable<Dossier>
  {
    return this.http.post<Dossier>(`${this.apiServerUrl}/Article/add`,Article)
  }

  public updateArticle(Article :Dossier):Observable<Dossier>
  {
    return this.http.put<Dossier>(`${this.apiServerUrl}/Article/update`,Article)
  }


  public deleteArticle(id :number):Observable<void>
  {
    return this.http.delete<void>(`${this.apiServerUrl}/Article/delete/${id}`);
  }
}
