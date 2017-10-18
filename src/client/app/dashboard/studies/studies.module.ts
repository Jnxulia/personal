import { NgModule } from '@angular/core';

import { StudiesComponent } from './studies.component';
import { CommonModule  } from '@angular/common';
import { ProgressbarModule   } from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
    imports: [CommonModule , ProgressbarModule],
    declarations: [StudiesComponent],
    exports: [StudiesComponent]
})

export class StudiesModule { }
