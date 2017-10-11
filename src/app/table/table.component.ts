import { Component, OnInit } from '@angular/core';
import {NewserviceService} from './newservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

result:any;

  constructor(private ser:NewserviceService) {}
  
  getDatafromService() {

  this.ser.getdata().subscribe((res) => this.result= res);

  }


  ngOnInit() {
   
  }

}
