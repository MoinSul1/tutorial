import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  //inputs: ['isFavorite']
})
export class FavouriteComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  // onClick(){
    // this.isFavorite=!this.isFavorite;
  // }

}
