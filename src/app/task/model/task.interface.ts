export const UrgencyMap: Object[] = [
{
  code: 'warn',
  name: 'Высокий'
},
{
  code: 'primary',
  name: 'Средний'
},
{
  code: 'accent',
  name: 'Низкий'
},
];
// срочность кастомный тип
export const enum Urgency {
  High,
  Middle,
  Low
}

export interface Task {
  id: number;
  name: string;
  description: string;
  status: boolean;
  urgency: Urgency;
  finishTo?: Date;
  finishToStr?: string;
  state?: string;
}

export interface FilteredTasks {
  completed: Task[];
  uncompleted: Task[];
}

export interface Statistics {
  all: number;
  completed: number;
  uncompleted: number;
  urgent: number;
}
