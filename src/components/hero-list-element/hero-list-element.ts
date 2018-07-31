import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroServiceProvider } from '../../providers/hero-service/hero-service';

@Component({
  selector: 'hero-list-element',
  templateUrl: 'hero-list-element.html'
})
export class HeroListElementComponent {
  @Input() public element: Hero;

  @Output() public readonly deleteClicked: EventEmitter<void> =
  new EventEmitter<void>();
  @Output() public readonly heroListElementClicked: EventEmitter<Hero> =
  new EventEmitter<Hero>();

  constructor(private heroService: HeroServiceProvider) { }

  protected deleteHero(name: string) {
    this.heroService
      .deleteHero(name)
      .then(_ => this.deleteClicked.emit());
  }

  public click() {
    this.heroListElementClicked.emit(this.element);
  }
}
