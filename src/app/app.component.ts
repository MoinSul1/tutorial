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
  courses = [1,2];
}
