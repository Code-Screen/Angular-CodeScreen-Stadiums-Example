import { StadiumsService } from './stadiums.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';

describe('StadiumsServiceTest', () => {
  const expectedResponse: Array<object> = [
    {
        "name": "Wembley Stadium",
        "country": "England",
        "capacity": 90000
    },
    {
        "name": "Emirates Stadium",
        "country": "England",
        "capacity": 60260
    },
    {
        "name": "Anfield",
        "country": "England",
        "capacity": 54074
    },
    {
        "name": "Old Trafford",
        "country": "England",
        "capacity": 74994
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

  describe('getStadiums(England)', () => {
    it('should return all stadiums in England', async(() => {
        stadiumsService.getStadiumData('England').subscribe(result => expect(result).toEqual(jasmine.arrayWithExactContents(expectedResponse))); 
    }));
  });

});