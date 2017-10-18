import { Component } from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser'
import { ExperienceService } from '../../services/experience.service';
import { ExperienceModel } from '../../models/experience.model';
//import { ProgressbarModule   } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	//	import : [ProgressbarModule, BrowserModule],
		moduleId: module.id,
    selector: 'experience-cmp',
    templateUrl: './experience.component.html',
		providers: [ExperienceService,ExperienceModel]


})

export class ExperienceComponent {
		experiences: ExperienceModel[];
		constructor(private ExperienceService: ExperienceService) {
        this.ExperienceService.getExperiences()
        .subscribe(experiences => this.experiences =  experiences.data);
    }
		getColor(id:number) {

			let numberColor : number = (id % 5) + 1;
			console.log(id , numberColor);
			let arrayColors= ['' , 'primary', 'warning', 'danger','success'];
			return arrayColors[numberColor];


		}
}
