import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-http-com',
  templateUrl: './http-com.component.html',
  styleUrls: ['./http-com.component.css']
})
export class HttpComComponent implements OnInit {

 private users = [];

  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/users/')
        .flatMap((data) => data.json())
        .subscribe((data) => {
          this.users.push(data);

        });
  }

  ngOnInit() {
  }

}
