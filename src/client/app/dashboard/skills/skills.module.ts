import { NgModule } from '@angular/core';

import { SkillsComponent } from './skills.component';
import { CommonModule  } from '@angular/common';
import { ProgressbarModule   } from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
    imports: [CommonModule , ProgressbarModule],
    declarations: [SkillsComponent],
    exports: [SkillsComponent]
})

export class SkillsModule { }
