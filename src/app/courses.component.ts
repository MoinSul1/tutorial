
import { Component } from '@angular/core'

@Component({
    selector: 'courses',
    template: `
    <input (keyup.enter)="onKeyUp()"/>
                        `
})


export class CoursesComponent{
onKeyUp(){
    console.log("Enter was pressed");
}
    

    
}