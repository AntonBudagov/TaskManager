import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { ListTaskComponent } from './list-task/list-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { MatModule } from '../mat/mat.module';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatModule
  ],
  declarations: [ListTaskComponent, AddTaskComponent, EditTaskComponent, SingleTaskComponent],
  exports: []
})
export class TaskModule { }
