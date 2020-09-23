import { Component } from '@angular/core';
import { profiles } from './profiles';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less']
})
export class GridComponent {
    public multiple = false;
    public allowUnsort = true;
    public sort: SortDescriptor[] = [{
      field: 'ProductName',
      dir: 'asc'
    }];
    public gridView: GridDataResult;
    public profiles: any[] = profiles;

    constructor() {
        this.loadProfiles();
    }

    public sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProfiles();
    }

    private loadProfiles(): void {
        this.gridView = {
            data: orderBy(this.profiles, this.sort),
            total: this.profiles.length
        };
    }
}
