import { Component, OnInit } from '@angular/core';
import { Colonist, Job } from '../models';
import JobsService from '../services/jobs.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [JobsService]
})
export class RegisterComponent implements OnInit {

  colonist: Colonist;
  marsJob : Job[];
  
  constructor(jobService: JobsService) { 
    this.colonist = new Colonist('', null, null, null);
    jobService.getJobs().subscribe((jobs) => {
      console.log(jobs);
    })

  }

  ngOnInit() {
  }

}