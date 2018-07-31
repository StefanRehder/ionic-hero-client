import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-hero',
  templateUrl: 'create-hero.html',
})
export class CreateHeroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }
}
