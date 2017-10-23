import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../shared/index';
@Injectable()

export class BasicInfoService {

    constructor(private http: Http) {
    }


    getInfo() {
        return this.http.get(Config.API +  'api/info.json')
        .map(res => res.json());
    }


}
