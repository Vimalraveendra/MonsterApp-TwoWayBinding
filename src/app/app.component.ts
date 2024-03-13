import { Component, OnDestroy, OnInit } from '@angular/core';
import { Monster } from './Model/Monsters.model';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy{
  title = 'monster-app-two-way-bind';
   isFetching:boolean=false;
   searchField:string="";
   monsters:Monster[]=[];
   error:String =null;
   subscription:Subscription;

  constructor(private http:HttpClient){}

  ngOnInit() {
      this.subscription = this.fetchMonsters();
  }

  onFilterMonster(searchFieldValue:string){
    this.searchField=searchFieldValue;
    };



   private fetchMonsters(){
    this.isFetching=true;
     return this.http.get("https://jsonplaceholder.typicode.com/users")
     .subscribe({
      next:(users:Monster[])=>{
        this.isFetching =false;
        this.monsters=users;
      },
      error:(error:any)=>{
        this.isFetching =false;
        this.error=error.message;
      }
     })
   }

   ngOnDestroy(): void {
      this.subscription.unsubscribe();
   }
}
