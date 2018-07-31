import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateHeroPage } from './create-hero';

@NgModule({
  declarations: [
    CreateHeroPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateHeroPage),
  ],
})
export class CreateHeroPageModule {}
