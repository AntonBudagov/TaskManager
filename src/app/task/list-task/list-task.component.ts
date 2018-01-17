import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskService} from '../task.service';
import {UrgencyMap, Task, FilteredTasks} from '../model/task.interface';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.sass']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[];
  isLoaded: Boolean = false;
  isCompletedVisible: Boolean = false;
  urgencyMap: any[] = UrgencyMap;
  filteredTasks: FilteredTasks = {
    completed : [],
    uncompleted: []
  };

  @Output() remove = new EventEmitter(false);
  constructor( private taskService: TaskService) { }

  ngOnInit() {
    // this.getTasks();
    this.getTaskFilter();
  }
  public getTasks() {
    this.taskService.getAllTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        this.isLoaded = true;
        console.log(this.tasks);
      });
  }
  // filter
  public getTaskFilter() {
    this.taskService.getFilteredTasks()
      .subscribe(values => {
          this.filteredTasks = values;
          this.isLoaded = true;
          console.log(this.filteredTasks);
        },
        error => console.log(error));
  }
  public toggleCompleted() {
    this.isCompletedVisible = !this.isCompletedVisible;
  }

  public deleteTask(task: Task): void {
    console.log(task);
    this.filteredTasks.uncompleted = this.filteredTasks.uncompleted.filter(t => t !== task);
    this.taskService.delete(task).subscribe();
    // this.task.animation(task)
  }

}
