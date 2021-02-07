import { CoursesService } from './courses.service';
import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `<h2>{{ getTitle() }}</h2>
    //string interpolation 
                <h2 [textContent]="Title"></h2>
                //property binding
                <ul>
                <li *ngFor=" let course of courses">
                {{ course }}
                </li>

                </ul>

                        `
})


export class CoursesComponent{

    title = "List Of Courses ";

    getTitle(){
        return this.title;

    }
    courses;
    constructor(service: CoursesService){
        this.courses=service.getCourses();
    }
}