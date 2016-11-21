import { Component, OnInit } from '@angular/core';
import { Encounters } from '../models';
import EncountersService from '../services/encounter.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css'],
  providers:[EncountersService]
})

export class EncountersComponent implements OnInit {
  
  encountersList: Encounters[];

  constructor(encounterService: EncountersService,
              private router: Router) { 
    
    
    encounterService.getJobs().subscribe((encounters) => {
      this.encountersList = encounters;
      this.router.navigate(['encounters']);

      console.log(encounters);
    });
  }
  ngOnInit() {
  }

onSubmit(event){
event.preventDefault();
this.router.navigate(['report']);
}

}
