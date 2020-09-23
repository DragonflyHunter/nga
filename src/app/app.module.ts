import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { GridComponent } from './grid/grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksComponent } from './tasks/tasks.component';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { InputsModule } from '@progress/kendo-angular-inputs';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GridComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: GridComponent},
      {path: 'dap', component: GridComponent},
      {path: 'tasks', component: TasksComponent},
    ]),
    NgbModule,
    GridModule,
    BrowserAnimationsModule,
    ToolBarModule,
    InputsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
