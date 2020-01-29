import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StadiumsService {

  stadiumsEndpointUrl: string = 'https://app.codescreen.dev/api/assessments/stadiums';

  // Your API key. Needed to successfully authenticate when calling the stadiums endpoint. 
  // This needs to be included in the Authorization header in the request you send to the stadiums endpoint.
  apiKey = "8c5996d5-fb89-46c9-8821-7063cfbc18b1"

  constructor() { }

  // Returns information about Soccer stadiums in the given country
  // The given country must be passed as a query parameter called country.
  getStadiumData(country: string): Observable<Object> {
    //TODO Implement.
  }

}
