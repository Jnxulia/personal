import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../shared/index';
@Injectable()

export class ExperienceService {

    constructor(private http: Http) {
    }


    getExperiences() {
        return this.http.get(Config.API +  'api/experience.json')
        .map(res => res.json());
    }


}
