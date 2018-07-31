import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroListPage } from './hero-list';

@NgModule({
  declarations: [
    HeroListPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroListPage),
  ],
})
export class HeroListPageModule {}
