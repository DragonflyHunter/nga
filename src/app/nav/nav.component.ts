import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  isNavbarCollapsed = true;
  searchHints = [];
  searchText = "";
  constructor() { }

  ngOnInit(): void {
  }
  searchFocus(myDrop: any, v:string) {
    if (v != '')
      myDrop.open();
    else
      myDrop.close();
  }
  searchKeyPress = (myDrop: any, v: string) => {
    if (v != '')
      myDrop.open();
    else
      myDrop.close();
    this.searchHints = [];
    if (v.match(/^\s*\d+\s*$/)) {
      this.searchHints.push("PIN containing: " + v);
      this.searchHints.push("Permit Number containing: " + v);
      this.searchHints.push("Street Number containing: " + v);
    }
    if (v.match(/^\s*\d+\s+[a-z|A-Z|.|,]+/))
      this.searchHints.push("Address containing: " + v);
    if (v.match(/^[a-z|A-Z|.|,]+/)) {
      this.searchHints.push("Street name containing: " + v);
      this.searchHints.push("City name containing: " + v);
      this.searchHints.push("Legal Party containing: " + v); 
      this.searchHints.push("Valuation Model name containing: " + v);
      
    }
  }

}
