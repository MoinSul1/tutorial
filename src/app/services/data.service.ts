import { BadInput } from './../bad-input';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { catchError }  from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
 import { Observable } from 'rxjs';
import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url).pipe(
    catchError(this.handleError))
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
    catchError(this.handleError)
      
       
      
    );

  }
update(resource){
  return this.http.patch(this.url + '/' + resource.id ,JSON.stringify({isRead: true})).pipe(
  catchError(this.handleError))
}
delete(id){
  return this.http.delete(this.url+'/'+ id).pipe(
    catchError((this.handleError)
      
    
    
    ))

}

private handleError(error:Response){

  if(error.status === 400)
      return Observable.throw(new BadInput(error.json()));


  if(error.status===400)
  return Observable.throw(new NotFoundError());

 return Observable.throw(new AppError());
}
}
