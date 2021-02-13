import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts!: any[];

  constructor(http: HttpClient) { 
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
    //console.log(response);
    this.posts = response;
  }) ;
}
  
 

}
