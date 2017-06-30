import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';
import { FormsModule }  from '@angular/forms';

import { MyApp } from './app.component';
import { TrailersPage } from '../pages/trailers/trailers';
import { TrailerPage } from '../pages/trailer/trailer';
import { FavorisPage } from '../pages/favoris/favoris';
import { LoginPage } from '../pages/login/login';
import { PreferencesPage } from '../pages/preferences/preferences';

import {ApiService} from '../services/api.service';

@NgModule({
  declarations: [
    MyApp,
    TrailersPage,
    TrailerPage,
    FavorisPage,
    LoginPage,
    PreferencesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrailersPage,
    TrailerPage,
    FavorisPage,
    LoginPage,
    PreferencesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiService
  ]
})
export class AppModule {}
