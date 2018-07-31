import { CreateHeroPage } from './../create-hero/create-hero';
import { Component } from '@angular/core';
import { IonicPage,  NavController } from 'ionic-angular';
import { HttpErrorResponse } from '@angular/common/http';
import { Hero } from '../../models/hero';
import { HeroServiceProvider } from '../../providers/hero-service/hero-service';

@IonicPage()
@Component({
  selector: 'page-hero-list',
  templateUrl: 'hero-list.html',
})
export class HeroListPage {
  protected heroes: Hero[] = [];
  protected statusMessage: string = '';
  public selectedHero: Hero;

  constructor(public navCtrl: NavController, private heroService: HeroServiceProvider) { }

  ionViewWillEnter() {
    this.refreshList();
  }

  protected goToCreateHeroPage() {
    this.navCtrl.push(CreateHeroPage);
  }

  public onHeroListElementClicked(elementData: Hero) {
    this.selectedHero = elementData;
  }

  protected onDeleteClicked() {
    this.selectedHero = null;
    this.refreshList();
  }

  protected refreshList() {
    // The Promise way
    this.heroService
      .getHeroes()
      .then((heroes: Hero[]) => {
        this.heroes = heroes;
      })
      .catch((err: HttpErrorResponse) => {
        switch (err.status) {
          case 404: {
              this.statusMessage = 'Not Found';
              break;
          }
          default: {
              this.statusMessage = err.message;
              break;
          }
        }
      }
    );

    // The Observable way (Kept here as an example)
    // this.heroService
    //   .getHeroesObservable()
    //   .subscribe(
    //     (heroes: Hero[]) => {
    //       this.heroes = heroes;
    //     },
    //     (err: HttpErrorResponse) => {
    //         switch (err.status) {
    //             case 404: {
    //                 this.statusMessage = 'Not Found';
    //                 break;
    //             }
    //             default: {
    //                 this.statusMessage = err.message;
    //                 break;
    //             }
    //         }
    //     }
    //   );
  }
}
