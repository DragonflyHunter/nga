import { Component, OnInit } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    public multiple = false;
    public allowUnsort = true;
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
