import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiServerUrl = "http://localhost:8098";
  
  
  constructor(private http : HttpClient) { }


  public getArticles():Observable<Article[]>
  {
    return this.http.get<Article[]>(`${this.apiServerUrl}/Article`);
  }


 public addArticle(Article :Article):Observable<Article>
  {
    return this.http.post<Article>(`${this.apiServerUrl}/Article/add`,Article)
  }

  public updateArticle(Article :Article):Observable<Article>
  {
    return this.http.put<Article>(`${this.apiServerUrl}/Article/update`,Article)
  }


  public deleteArticle(id :number):Observable<void>
  {
    return this.http.delete<void>(`${this.apiServerUrl}/Article/delete/${id}`);
  }
}
