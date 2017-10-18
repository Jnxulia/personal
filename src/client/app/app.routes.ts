import { Routes } from '@angular/router';
import { LoginRoutes } from './login/index';
//import { LoginComponent } from './login/index';
import { DashboardRoutes } from './dashboard/index';
import { DashboardComponent } from './dashboard/index';
import { ResumeRoutes } from './resume/index';

export const routes: Routes = [
	...LoginRoutes,
	...DashboardRoutes,
	...ResumeRoutes
	,
{ path: '**', component: DashboardComponent }
];
