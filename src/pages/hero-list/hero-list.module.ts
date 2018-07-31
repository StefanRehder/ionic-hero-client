import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroListPage } from './hero-list';
import { HeroListElementComponent } from '../../components/hero-list-element/hero-list-element';
import { HeroDetailsComponent } from '../../components/hero-details/hero-details';

@NgModule({
  declarations: [
    HeroListPage,
    HeroListElementComponent,
    HeroDetailsComponent
  ],
  imports: [
    IonicPageModule.forChild(HeroListPage)
  ],
})
export class HeroListPageModule {}