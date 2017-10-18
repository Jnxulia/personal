import { Component } from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser'
import { SkillService } from '../../services/skill.service';
import { SkillModel } from '../../models/skill.model';
//import { ProgressbarModule   } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
	//	import : [ProgressbarModule, BrowserModule],
		moduleId: module.id,
    selector: 'skills-cmp',
    templateUrl: './skills.component.html',
		providers: [SkillService,SkillModel]


})

export class SkillsComponent {
		//experiences: ExperienceModel[];
		skills : SkillModel[];
		constructor(private skillService: SkillService) {
      /*  this.skillService.getExperiences()
        .subscribe(experiences => this.experiences =  experiences.data);*/
				this.skillService.getSkills()
        .subscribe(skills => this.skills =  skills.data);

    }
    deleteSkill(id:any) {


    }
		getColor(id:number) {

			let numberColor : number = (id % 5) + 1;
			console.log(id , numberColor);
			let arrayColors= ['' , 'primary', 'warning', 'danger','success'];
			return arrayColors[numberColor];


		}
}
