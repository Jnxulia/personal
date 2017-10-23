import { Component } from '@angular/core';
import { BasicInfoService } from '../../services/basicinfo.service';
import { BasicInfoModel } from '../../models/basicinfo.model';
/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html',
	providers: [BasicInfoModel,BasicInfoService]
})

export class HomeComponent {
	info :BasicInfoModel = new BasicInfoModel();
	constructor(private basicInfoService: BasicInfoService) {
			this.basicInfoService.getInfo()
			.subscribe(info => this.info =  info.data);

	}


}
