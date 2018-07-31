import { Component, Input } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'hero-details',
  templateUrl: 'hero-details.html'
})
export class HeroDetailsComponent {
  @Input() public selectedHero: Hero;

  constructor() { }
}
