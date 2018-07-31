import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HeroListPage } from '../pages/hero-list/hero-list';
import { CreateHeroPage } from '../pages/create-hero/create-hero';
import { HeroServiceProvider } from '../providers/hero-service/hero-service';
import { CreateHeroPageModule } from './../pages/create-hero/create-hero.module';
import { HeroListPageModule } from './../pages/hero-list/hero-list.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeroListPageModule,
    CreateHeroPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HeroListPage,
    CreateHeroPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeroServiceProvider
  ]
})
export class AppModule {}
