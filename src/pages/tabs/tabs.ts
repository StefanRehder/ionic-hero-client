import { Component } from '@angular/core';

import { CreateHeroPage } from '../create-hero/create-hero';
import { HeroListPage } from '../hero-list/hero-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HeroListPage;
  tab2Root = CreateHeroPage;

  constructor() {

  }
}
