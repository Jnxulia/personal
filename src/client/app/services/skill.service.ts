import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../shared/index';
@Injectable()

export class SkillService {

    constructor(private http: Http) {
        console.log (Config);
    }

    getSkills() {
        return this.http.get(Config.API + 'api/skills.json')
        .map(res => res.json());
    }

    addSkill(newSkill: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/skill', JSON.stringify(newSkill), {headers:headers})
        .map(res => res.json());

    }

    deleteSkill(id: any) {
        return this.http.delete('api/skill/' + id)
        .map(res => res.json());
    }

}
