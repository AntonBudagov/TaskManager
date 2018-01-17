import { Injectable } from '@angular/core';

// import { AppService } from '../app.service';
import { Observable } from 'rxjs/Observable';
import {Statistics} from '../task/model/task.interface';
import {TaskService} from '../task/task.service';

@Injectable()
export class StatisticsService {
  private statistics: Statistics = {
    all: 0,
    completed: 0,
    uncompleted: 0,
    urgent: 0
  };

  constructor(private taskService: TaskService) { }
    private generateStatistics(values): void {

        values.forEach( item => {
            this.statistics.all++;
            if (item.status === true) {this.statistics.completed++}
            if (item.status === false) {this.statistics.uncompleted++}
            if (item.urgency === 0) {this.statistics.urgent++}
        });
    }

    getStatistics(): Observable<Statistics> {
        return new Observable(observer => {
            this.taskService.getAllTasks().subscribe(values => {
                    console.log(values);
                    this.generateStatistics(values);
                    observer.next(this.statistics);
                    observer.complete();
                },
                error => console.log(error));
        });
    }

}
