import { Component, OnInit } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {
    public multiple = false;
    public allowUnsort = true;
    public checked: boolean = true;
    public sort: SortDescriptor[] = [{
        field: 'ProductName',
        dir: 'asc'
    }];
    public tasks = [
        {
            module: "RPA",
            task: "Data Analysis and Processing",
            page: "Summary"
        },
        {
            module: "Aumentum",
            task: "Task Manager",
            page: "Main"
        }    
    ];
    public savedTasks = [
      {
          name: "2019 Residential Comp model experimentation",
          date: "2020-Sep-15 @ 2:17 PM",
          task: "CompModel, CompSelectionModel, RPA Property Characteristics"
      },
      {
          name: "EXPIRED SESSION - 1",
          date: "2020-Sep-14 @ 3:45 PM",
          task: "SysType Configuration"
      }    
  ]
    public gridView: GridDataResult;
    constructor() {
        this.gridView = {
            data: orderBy(this.tasks, this.sort),
            total: this.tasks.length
        };
    }

    
    public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
    }

    ngOnInit(): void {

    }

}
