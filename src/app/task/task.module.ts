import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { ListTaskComponent } from './list-task/list-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { MatModule } from '../mat/mat.module';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { InMemoryDataService } from '../in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule,
    MatModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [ListTaskComponent, AddTaskComponent, EditTaskComponent, SingleTaskComponent],
  exports: [],
  providers: [TaskService]
})
export class TaskModule { }
