// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { Encounters } from '../models';
// import 'rxjs/add/operator/map';
// @Injectable()
// export default class EncountersService {

//     ENCOUNTERS_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

//   constructor(private http: Http) { }

//   getJobs(): Observable<Encounters[]> {
//    return this.http
//               .get(this.ENCOUNTERS_JSON)
//               .map((res: Response) => res.json().encounters);
//   }
                  
// }

import { Injectable } from  '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Encounters } from '../models';
import { NewEncounter } from '../models';
import 'rxjs/add/operator/map';

@Injectable()
export default class EncountersService {
  ENCOUNTERS_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/encounters'

  constructor(private http: Http) {}

    getJobs(): Observable<Encounters[]> {
      return this.http.get(this.ENCOUNTERS_JSON)
        .map((res: Response) => res.json().encounters)
    }

    submitEncounter(encounter: NewEncounter):Observable<Encounters> {

      const headers = new Headers();
      headers.append('Content-Type', 'application/json')
        return this.http.post(this.ENCOUNTERS_JSON, { encounter }, { headers })
                .map((res: Response) => res.json().encounter)

    }
}
