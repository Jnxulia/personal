import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CourseModel } from '../../models/course.model';

@Component({
	//	import : [ProgressbarModule, BrowserModule],
		moduleId: module.id,
    selector: 'studies-cmp',
    templateUrl: './studies.component.html',
		providers: [CourseService,CourseModel]


})

export class StudiesComponent {
		courses : CourseModel[];
		constructor(private courseService: CourseService) {
				this.courseService.getCourses()
        .subscribe(courses => this.courses =  courses.data);

    }

		getColor(id:number) {

			let numberColor : number = (id % 5) + 1;
			let arrayColors= ['' , 'primary', 'warning', 'danger','success'];
			return arrayColors[numberColor];


		}
}
