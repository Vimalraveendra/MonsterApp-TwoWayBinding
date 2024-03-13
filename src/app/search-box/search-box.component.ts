import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  searchField:String=null;
  @Output()searchTextEvent=new EventEmitter<any>();

  onUpdateSearchText(inputValue:any){
    this.searchField=inputValue;
    this.searchTextEvent.emit(this.searchField );
  }
}
