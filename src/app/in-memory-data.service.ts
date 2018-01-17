import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Urgency, Task} from './task/model/task.interface';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      {
        id: 100,
        name: 'Купить продуктов',
        description: 'Небыл уже неделю, давно sf',
        status: true,
        urgency: Urgency.High,
        finishTo: new Date('1/1/16'),
        state: 'inactive'
      },
      {
        id: 101,
        name: 'Buy product',
        description: 'Небыл уже неделю, давно полра',
        status: false,
        urgency: Urgency.Low,
        finishTo: new Date('5/2/16'),
        state: 'inactive'
      },
      {
        id: 102,
        name: 'Доделать работу',
        description: 'Some text 2',
        status: false,
        urgency: Urgency.High,
        finishTo: new Date('1/20/16'),
        state: 'inactive'
      },
      {
        id: 103,
        name: 'Отослать письмо по работе',
        description: 'Some text 3',
        status: true,
        urgency: Urgency.Middle,
        finishTo: new Date('3/2/17'),
        state: 'inactive'
      },
      {
        id: 104,
        name: 'Написать еще один Ангуляр компонент',
        description: 'Some text 4',
        status: false,
        urgency: Urgency.High,
        finishTo: new Date('1/12/15'),
        state: 'inactive'
      },
      {
        id: 105,
        name: 'Пополнить счет на телефоне',
        description: 'Some text 2',
        status: false,
        urgency: Urgency.Low,
        finishTo: new Date('1/20/16'),
        state: 'inactive'
      },
      {
        id: 106,
        name: 'Посмотреть фильм',
        description: 'Some text 3',
        status: true,
        urgency: Urgency.Middle,
        finishTo: new Date('3/2/17'),
        state: 'inactive'
      },
      {id: 107, name: 'Test8', description: '', status: true, urgency: Urgency.High, finishTo: new Date('1/12/15'), state: 'inactive'},
      {
        id: 108,
        name: 'Buy product',
        description: 'Небыл уже неделю, давно полра',
        status: false,
        urgency: Urgency.Middle,
        finishTo: new Date('5/2/16'),
        state: 'inactive'
      },

      {
        id: 200,
        name: 'Купить продуктов',
        description: 'Небыл уже неделю, давно sf',
        status: true,
        urgency: Urgency.High,
        finishTo: new Date('1/1/16'),
        state: 'inactive'
      },
      {
        id: 201,
        name: 'Buy product',
        description: 'Небыл уже неделю, давно полра',
        status: false,
        urgency: Urgency.Low,
        finishTo: new Date('5/2/16'),
        state: 'inactive'
      },
      {
        id: 202,
        name: 'Доделать работу',
        description: 'Some text 2',
        status: false,
        urgency: Urgency.High,
        finishTo: new Date('1/20/16'),
        state: 'inactive'
      },
      {
        id: 203,
        name: 'Отослать письмо по работе',
        description: 'Some text 3',
        status: true,
        urgency: Urgency.Middle,
        finishTo: new Date('3/2/17'),
        state: 'inactive'
      },
      {
        id: 204,
        name: 'Написать еще один Ангуляр компонент',
        description: 'Some text 4',
        status: false,
        urgency: Urgency.High,
        finishTo: new Date('1/12/15'),
        state: 'inactive'
      },
      {
        id: 205,
        name: 'Пополнить счет на телефоне',
        description: 'Some text 2',
        status: false,
        urgency: Urgency.Low,
        finishTo: new Date('1/20/16'),
        state: 'inactive'
      },
      {
        id: 206,
        name: 'Посмотреть фильм',
        description: 'Some text 3',
        status: true,
        urgency: Urgency.Middle,
        finishTo: new Date('3/2/17'),
        state: 'inactive'
      },
      {id: 207, name: 'Test8', description: '', status: true, urgency: Urgency.High, finishTo: new Date('1/12/15'), state: 'inactive'},
      {
        id: 208,
        name: 'Buy product',
        description: 'Небыл уже неделю, давно полра',
        status: false,
        urgency: Urgency.Middle,
        finishTo: new Date('5/2/16'),
        state: 'inactive'
      },
    ];
    return {tasks};
  }
}
