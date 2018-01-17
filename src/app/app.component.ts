import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;
}
