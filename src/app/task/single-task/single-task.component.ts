import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {  trigger,
  state,
  style,
  animate,
  transition } from '@angular/animations';
import {Task} from '../model/task.interface';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.sass'],
  animations: [
    trigger('taskState', [
      state('inactive', style({
        transform: 'scale(1)',
        // height: '130px',
      })),
      state('active',   style({
        transform: 'translateX(200%)',
        // height: '0px',
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class SingleTaskComponent implements OnInit {

  @Input() tasks: Task[];
  @Output() remove = new EventEmitter(false);

  constructor() { }

  ngOnInit() {
  }
  public onRemove(task: any) {
    task.state = task.state === 'active' ? 'inactive' : 'active';
    setTimeout( () => {
      this.remove.emit(task);
    }, 1000);
  }

}
