import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTaskComponent} from './list-task/list-task.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {EditTaskComponent} from './edit-task/edit-task.component';
import {StatisticsComponent} from '../statistics/statistics.component';

const routes: Routes = [
  {path: 'statistics', component: StatisticsComponent},
  {path: 'task-list', component: ListTaskComponent},
  {path: 'task/add', component: AddTaskComponent},
  {path: 'task/:id', component: EditTaskComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
