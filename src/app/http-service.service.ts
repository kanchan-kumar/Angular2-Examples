import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HttpServiceService {

  http:Http;
  constructor(http: Http) {
    this.http = http;
   }

  getUsers() {
   return this.http.get('http://jsonplaceholder.typicode.com/users/')
        .flatMap((data) => data.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  }

}
