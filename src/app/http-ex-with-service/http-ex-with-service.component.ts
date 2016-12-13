import { Component, OnInit } from '@angular/core';
import { HttpServiceService} from '../http-service.service';


@Component({
  selector: 'app-http-ex-with-service',
  templateUrl: './http-ex-with-service.component.html',
  styleUrls: ['./http-ex-with-service.component.css']
})
export class HttpExWithServiceComponent implements OnInit {

  private users = [];

  constructor(private httpService:HttpServiceService) {
    httpService.getUsers().subscribe( data => {
          this.users.push(data);
        });
   }

  ngOnInit() {
  }

}
