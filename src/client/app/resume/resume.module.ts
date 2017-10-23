
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule }        from '../dashboard/home/home.module';
import { BlankPageModule }   from '../dashboard/blank-page/blankPage.module';
import { BSComponentModule } from '../dashboard/bs-component/bsComponent.module';
import { SkillsModule }   from '../dashboard/skills/skills.module';
import { ExperienceModule }   from '../dashboard/experience/experience.module';
import { StudiesModule }   from '../dashboard/studies/studies.module';
import { ResumeComponent } from './resume.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HomeModule,
        BSComponentModule,
        BlankPageModule,
        SkillsModule,
        ExperienceModule,
        StudiesModule
    ],
    declarations: [ResumeComponent],
    exports: [ResumeComponent]
})

export class ResumeModule { }
