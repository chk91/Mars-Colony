import { Component, OnInit } from '@angular/core';
import { Encounters } from '../models';
import EncountersService from '../services/encounter.service'

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css'],
  providers:[EncountersService]
})


export class EncountersComponent implements OnInit {
  encountersList: Encounters[];

  constructor(encounterService: EncountersService) { 
    
    
    encounterService.getJobs().subscribe((encounters) => {
      this.encountersList = encounters;
      console.log(encounters);
    });
  }
  ngOnInit() {
  }

}
