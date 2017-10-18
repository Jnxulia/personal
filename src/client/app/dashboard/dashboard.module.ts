import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule }        from './home/home.module';
import { BlankPageModule }   from './blank-page/blankPage.module';
import { BSComponentModule } from './bs-component/bsComponent.module';
import { SkillsModule }   from './skills/skills.module';
import { ExperienceModule }   from './experience/experience.module';
import { StudiesModule }   from './studies/studies.module';
import { DashboardComponent } from './dashboard.component';

import { SidebarComponent } from '../shared/index';
import { FooterComponent } from '../shared/index';

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
    declarations: [DashboardComponent, SidebarComponent ,FooterComponent
  //  , SkillsModule
    ],
    exports: [DashboardComponent, SidebarComponent , FooterComponent
    //,SkillsModule
    ]
})

export class DashboardModule { }
