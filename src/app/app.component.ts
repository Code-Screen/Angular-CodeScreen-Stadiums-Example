import { Component } from '@angular/core';
import { StadiumsService } from './services/stadiums/stadiums.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private stadiumsService: StadiumsService) { }

  getStadiums() {
    //TODO - Implement by using the Stadiums service provided.
  }

 }
