import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NewserviceService {
   constructor(private http:Http) { }
   getdata() {
    	return this.http.get('whatever?').map((res)=>res.json());
    }

}
