import { Component } from '@angular/core';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-challenge';
  apiUrl: string | undefined;

  constructor() {
    this.apiUrl = enviroment.TOKEN_API;
    console.log(this.apiUrl);
  }
}
