import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateHeroPage } from './create-hero';
import { CreateHeroFormComponent } from '../../components/create-hero-form/create-hero-form';

@NgModule({
  declarations: [
    CreateHeroPage,
    CreateHeroFormComponent
  ],
  imports: [
    IonicPageModule.forChild(CreateHeroPage),
  ],
})
export class CreateHeroPageModule {}
