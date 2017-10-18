import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { LoginModule } from './login/login.module';
import { ResumeModule } from './resume/resume.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes),
		LoginModule,
		DashboardModule,
		ResumeModule,
		SharedModule.forRoot()
	],
	declarations: [AppComponent],
	providers: [{
		provide: APP_BASE_HREF,
		useValue: '<%= APP_BASE %>'
	}],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
	bootstrap: [AppComponent]

})

export class AppModule { }
