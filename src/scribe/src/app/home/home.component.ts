import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string="inTeRnShAla";
  amount: number= 123456.9127;
  dateOfBirth= new Date();

  constructor() { }

  ngOnInit() {
  }

}