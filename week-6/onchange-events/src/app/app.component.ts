import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onChange() Example';

  stock: string;
  readonly numberOfShares = 100;

  myGreeting = 'red';
  myUser: { name: string } = { name: 'blue'}
  }

