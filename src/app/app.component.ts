import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mosh1';
  post={
    title:"Title",
    isFavorite: true
  }
  courses = [
  {id:1,name:'Course1'},
  {id:2,name:'Course2'},
  {id:3,name:'Course3'}
  
    
  ];
  onAdd(){
    this.courses.push({id:4,name:'course4'});
  }
  onChange(course){
   course.name = "UPDATED"
  }
  
}
