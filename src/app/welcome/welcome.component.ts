import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  //  @HostBinding('@routeAnimation') get routeAnimation() {
  //    return true;
  //  }
  //  @HostBinding('style.position') get position() {
  //   return 'absolute';
  // }

  // hero: Hero;

  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private service: HeroService
  // ) { }

  ngOnInit() {
  }

}
