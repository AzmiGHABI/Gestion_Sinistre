import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'app/article.service';
import { Article } from './article';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: Article[] = [];
  constructor(private ArticleService :ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  public getArticles():void
  {
    this.ArticleService.getArticles().subscribe((response:Article[])=>
    {
      console.log("res",response);
      this.articles = response;

    },
    (error: HttpErrorResponse) => {alert(error.message);}
    )
    ;
  }

}
