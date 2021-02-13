import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit{
  posts!: any[];
  

  constructor( private service: PostService ) { 
    
}
ngOnInit(){
  this.service.getPosts()
    .subscribe(response => {
    //console.log(response);
    this.posts = response;
  }) ;

}
  createPost(input: HTMLInputElement){
    let post = {title: input.value } ;
    input.value = '';
    this.service.createPost(post)
    .subscribe(response => {
      post['id'] = response.id;
      this.posts.splice(0,0,post);
    });

    


  }
  updatePost(post){
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response);
    })
  }
 

  deletePost(post){
    this.service.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1); 
    });
  }

}
