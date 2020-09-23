import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  isNavbarCollapsed = true;
  menuItems = [
    "Real Property",
    "Mineral Characteristics",
    "Condominiums",
    "Sale Value Distribution",
    "Permits",
    "Asking Rent",
    "Mass Update",
    "Mass Calculation",
    "Mass Value Conclusion",
    "Mass Event Creation",
    "Mass Direct Enrollment",
    "Cost Model Analysis",
    "External Rates Analysis",
    "Income Analysis",
    "Land Analysis",
    "Neighborhood Analysis",
    "Sales Ratio Analysis",
    "Study Group Analysis",
    "Visual Analysis",
    "Income Comparable Analysis",
    "Data Analysis and Processing",
    "Insights",
    "Batch Reports",
    "Benchmark Comp Sales",
    "E Gov",
    "Regression Export",
    "Temporary Pins Import",
    "Permit Import",
    "Neighborhood Maintenance",
    "Model Control",
    "Cost Model Maintenance",
    "Land Model Maintenance",
    "Reconciled Value Model",
    "Modeled Income",
    "Mineral Claim Fee",
    "Comparable Model Maintenance",
    "Regression Model Maintenance",
    "Field Inspection",
    "Reports",
    "Workflow",
    "RPA Configuration"
  ];
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
      this.searchHints.push({icon: ["fas", "fa-map-marker-alt"], text: "PIN containing: " + v});
      this.searchHints.push({icon: ["fas", "fa-file-invoice-dollar"], text: "Permit Number containing: " + v});
      this.searchHints.push({icon: ["fas", "fa-road"], text: "Street Number containing: " + v});
    }
    if (v.match(/^\s*\d+\s+[a-z|A-Z|.|,]+/))
      this.searchHints.push({icon: ["fas", "fa-building"], text: "Address containing: " + v});
    if (v.match(/^[a-z|A-Z|.|,]+/)) {
      this.searchHints.push({icon: ["fas", "fa-road"], text: "Street name containing: " + v});
      this.searchHints.push({icon: ["fas", "fa-city"], text: "City name containing: " + v});
      this.searchHints.push({icon: ["fas", "fa-user"], text: "Legal Party containing: " + v}); 
      this.searchHints.push({icon: ["fas", "fa-usd"], text: "Valuation Model name containing: " + v});      
    }

    if (v.length > 1) {
      let r: RegExp = new RegExp(v, 'i');
      this.menuItems.forEach(menu => {
        if (r.exec(menu))
          this.searchHints.push({icon: ["fas", "fa-rocket"], text: "Launch Task: " + menu});
      });
    }
    
  }

}
