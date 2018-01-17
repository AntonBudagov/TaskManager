import { Injectable } from '@angular/core';
import {FilteredTasks, Task} from './model/task.interface';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class TaskService {

  private tasks: Task[];
  private filteredTasks: FilteredTasks;
  private tasksUrl = 'api/tasks'; // URL to web api
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }



  public getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl).pipe(
      tap(tasks => console.log(`fetched tasks`)),
      catchError(this.handleError('getAllTasks', []))
    );
  }

  /** GET Task by id. Return `undefined` when id not found */
  getTaksNo404<Data>(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/?id=${id}`;
    return this.http.get<Task[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          console.error(`${outcome} hero id=${id}`);
        }),
        // catchError(this.handleError<Task>(`getHero id=${id}`))
      );
  }

  public getTaskById(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url);
    // .toPromise()
    // .then(response => response.json().data as Task)
    // .catch(this.handleError);
  }
  /** POST: add a new hero to the server */
  public add (task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task,  {headers: this.headers}).pipe(
      tap((task: Task) => console.log(`added task w/ id=${task.id}`)),
      catchError(this.handleError<Task>('addTask'))
    );
  }

  /**
   * DELETE: delete the hero from the server
   * @param {Task | Number} task
   * @returns {Observable<Task>}
   */
  public delete(task: Task): Observable<Task> {
    const id = typeof task === 'number' ? task: task.id;
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete<Task>(url, {headers: this.headers})
      .pipe(
        tap(_ => console.log(`deleted task id=${id}`)),
        catchError(this.handleError<Task>('deleteTask'))
      );
  }
  /** PUT: update the task on the server */
  public update(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    // JSON.stringify(task)
    return this.http.put<Task>(url, task, {headers: this.headers})
    // .toPromise()
    // .then(() => task)
    // .catch(this.handleError);
  }

  public getFilteredTasks(): Observable<FilteredTasks> {
    return new Observable(observer => {
      this.getAllTasks().subscribe(values => {
          this.satData(values);
          observer.next(this.filteredTasks);
          observer.complete();
        },
        error => console.log(error));
    });
  }
  private satData(values): void {
    this.tasks = values;
    this.filteredTasks = {
      completed : this.filterCompletedTasks(values),
      uncompleted: this.filterUncompletedTasks(values)
    };
  }
  private filterCompletedTasks(allItems): Task[] {
    return allItems.filter(item => {
      return item.status === true;
    });
  }

  private filterUncompletedTasks(allItems): Task[] {
    return allItems.filter(item => {
      return item.status === false;
    });
  }

  /**
   * Handle Http operation that failed.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   * @returns {(error:any)=>Observable<T>}
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
