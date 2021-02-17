import { BadInput } from './../bad-input';
import { NotFoundError } from './../not-found-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppError } from '../app-error';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit{
  posts: any[]=[];
  id: any;

  constructor( private service: PostService ) { 
    
}
ngOnInit(){
  this.service.getAll()
    .subscribe(response => {
    //console.log(response);
    this.posts = response;
  }) ;

}
  createPost(input: HTMLInputElement){
    let post = {title: input.value } ;
    input.value = '';
    this.service.create(post)
    .subscribe(response => {
      post['id'] = response.id;
      this.posts.splice(0,0,post);
    },(error: AppError) =>{
      if(error instanceof BadInput){
     //   this.form.setErrors(error.originalError);
      }
      else
      throw error;
    });

    


  }
  updatePost(post){
    this.service.update(post)
    .subscribe(response => {
      console.log(response);
    })
  }
 

  deletePost(post){
    this.service.delete(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1); 
    },(error: AppError)  =>{
      if(error instanceof NotFoundError )
      alert('this post has already been deleted');
      else{
        throw error;
      }
       });
  }

}
