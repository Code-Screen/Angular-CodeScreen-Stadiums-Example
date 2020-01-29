import { StadiumsService } from './stadiums.service';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

describe('StadiumsServiceHiddenTest', () => {
  const expectedResponse: Array<object> = [
    {
        "name": "Camp Nou",
        "country": "Spain",
        "capacity": 99354
    },
    {
        "name": "Mestalla",
        "country": "Spain",
        "capacity": 55000
    },
    {
        "name": "Santiago Bernabeu",
        "country": "Spain",
        "capacity": 81044
    },
    {
        "name": "Wanda Metropolitano",
        "country": "Spain",
        "capacity": 68456
    }
  ];

  let stadiumsService: StadiumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StadiumsService]
    });

    stadiumsService = TestBed.get(StadiumsService);
  });

  describe('getStadiums(Spain)', () => {
    it('should return all stadiums in Spain', async(() => {
        stadiumsService.getStadiumData('Spain').subscribe(result => expect(result).toEqual(jasmine.arrayWithExactContents(expectedResponse))); 
    }));
  });

});