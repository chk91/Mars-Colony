import { Component, OnInit } from '@angular/core';
import { Aliens, NewEncounter } from '../models';
import AliensService from '../services/aliens.service';
import EncountersService from '../services/encounter.service';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import {cantBe} from '../shared/validators';
import { Router } from '@angular/router';


const notNone = (value) => {
  return value === '(none)'? false : true;

}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers:[AliensService, EncountersService]
})

export class ReportComponent implements OnInit {
  
    aliensList: Aliens[];
    reportForm: FormGroup;
    NO_ALIEN_SELECTED = '(none)';
    submitted : boolean;

  constructor(private alienService: AliensService,
              private encountersService: EncountersService,
              private router: Router) { 
    
    alienService.getAliens().subscribe((aliens) => {
      this.aliensList = aliens;
    }, (err) => {
      console.log(err);
    });
  }
  ngOnInit() {
    this.reportForm = new FormGroup({
      atype: new FormControl(this.NO_ALIEN_SELECTED, []),
      action: new FormControl('', [Validators.required, Validators.maxLength(450)])
    })
  }

  private getDate() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  }

  onSubmit(event) {
    event.preventDefault();

    if(this.reportForm.invalid) {
      this.submitted = true; } else {
    const date = this.getDate();
    const atype = this.reportForm.get('atype').value;
    const action = this.reportForm.get('action').value;
    

    const encounter = new NewEncounter(date, atype, action, 4); 
    this.encountersService.submitEncounter(encounter)
      .subscribe((enc) => {
        console.log('get encounter', enc);
        this.router.navigate(['encounters']);
      }, (err) => {
        console.log('there was an error');
      })
  }
  }
}
