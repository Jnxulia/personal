import { NgModule } from '@angular/core';

import { ExperienceComponent } from './experience.component';
import { CommonModule  } from '@angular/common';
import { ProgressbarModule   } from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
    imports: [CommonModule , ProgressbarModule],
    declarations: [ExperienceComponent],
    exports: [ExperienceComponent]
})

export class ExperienceModule { }
