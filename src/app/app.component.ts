import { Component, OnInit } from '@angular/core';
import { Monster } from './Model/Monsters.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'monster-app-two-way-bind';
   monsters:Monster[]=[];

  constructor(){}

  ngOnInit() {
      
  }
}
