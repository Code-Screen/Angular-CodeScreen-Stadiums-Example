# Angular-CodeScreen-Stadiums-Example

The CodeScreen Soccer Stadiums API is a service that contains one endpoint,<br>
GET https://app.codescreen.dev/api/assessments/stadiums, which returns the details of soccer stadiums in a given country. <br>The country is passed in as a query parameter called `country` in the endpoint URL.

When you send an `HTTP GET` request to the endpoint, the response will be a `200 OK`, which includes a body containing a list of stadium data in `JSON` format. 
<br><br>
An example response is the following:

     [
       {
         "name": "Wembley Stadium",
         "country": "England",
         "capacity": 90000
       },
       {
         "name": "Emirates Stadium",
         "country": "England",
         "capacity": 60260
       }
     ]
     
     
## The Task

The candidate is required to implement the `getStadiumData()` method in `src/app/services/stadiums/stadiums.service.ts`.

The stadium data should then be displayed on the homepage of the app, see `src/app/app.component.html`.

The unit tests in `src/app/services/stadiums/stadiums.service.spec.ts` and `src/app/services/stadiums/stadiums.service.hidden.spec.ts` should all pass if the `getStadiumData()` method has been implemented correctly.

The tests that are visible to the candidate are located in `src/app/services/stadiums/stadiums.service.spec.ts`.

The tests are not visible to the candidate are located in `src/app/services/stadiums/stadiums.service.hidden.spec.ts`

The `package.json` and `package-lock.json` files cannot be changed as these contain the dependency versions required for this assessment.
