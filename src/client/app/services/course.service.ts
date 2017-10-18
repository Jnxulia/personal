import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../shared/index';
@Injectable()

export class CourseService {

    constructor(private http: Http) {
    }


    getCourses() {
        return this.http.get(Config.API +  'api/courses.json')
        .map(res => res.json());
    }


}
