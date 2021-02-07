import { CoursesService } from './courses.service';
import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `<h2>{{ getTitle() }}</h2>
    
                <h2 [textContent]="title"></h2>
                
                <ul>
                <li *ngFor=" let course of courses">
                {{ course }}
                </li>

                </ul>
                <table>
                <tr><td [attr.colspan]="colspan"></td></tr>
                </table>

                        `
})


export class CoursesComponent{

    title = "List Of Courses ";
    colspan=2;

    getTitle(){
        return this.title;

    }
    courses;
    constructor(service: CoursesService){
        this.courses=service.getCourses();
    }
}