import { NotFoundError } from './../not-found-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { catchError }  from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
 import { Observable } from 'rxjs';
import { AppError } from '../app-error';
import { NotFoundError } from '../app-error';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url)
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post))

  }
updatePost(post){
  return this.http.patch(this.url + '/' + post.id ,JSON.stringify({isRead: true}))
}
deletePost(id){
  return this.http.delete(this.url+'/'+ id).pipe(
    .catchError((error:Response)=>{
      if(error.status===400)
      return Observable.throw(new NotFoundError());
     return Observable.throw(new AppError());
    }
    
    ))

}


}
