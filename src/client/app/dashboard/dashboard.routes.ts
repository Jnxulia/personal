import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { BlankPageRoutes } from './blank-page/index';
import { BSComponentRoutes } from './bs-component/index';
import { SkillsRoutes }      from './skills/index';
import { ExperienceRoutes }      from './experience/index';
import { StudiesRoutes }      from './studies/index';
import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'inicio',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...BSComponentRoutes,
	    	...BlankPageRoutes,
        ...SkillsRoutes,
        ...ExperienceRoutes,
        ...StudiesRoutes
    	]
  	}
];
