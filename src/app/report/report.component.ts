import { Component, OnInit } from '@angular/core';
import { Aliens } from '../models';
import AliensService from '../services/aliens.service';

const notNone = (value) => {
  return value === '(none)'? false : true;

}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers:[AliensService]
})

export class ReportComponent implements OnInit {
  
    aliensList: Aliens[];

  constructor(alienService: AliensService) { 
    
    
    alienService.getJobs().subscribe((aliens) => {
      this.aliensList = aliens;
      console.log(aliens);
    });
  }
  ngOnInit() {
  }

}
