import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private appService:ServiceService) { }
  ipaddr:String=""
  ngOnInit(): void {
  }
  loadDoc(){
    this.appService.getFirwareDetails(this.ipaddr).subscribe((data: any) => {
      console.log(data);
    });
  }
}
