import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as lodash from 'lodash';

import { TrailersPage } from '../pages/trailers/trailers';
import { TrailerPage } from '../pages/trailer/trailer';
import { FavorisPage } from '../pages/favoris/favoris';
import { LoginPage } from '../pages/login/login';
import { PreferencesPage } from '../pages/preferences/preferences';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TrailersPage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    //Menu Population
    this.pages = [
      { title: 'Home', component: TrailersPage },
      { title: 'Favoris', component: FavorisPage }
    ];

    //An user is authenticated
    if(!lodash.isEmpty(window.localStorage.getItem('user'))) {
      this.pages.push({ title: 'Preferences', component: PreferencesPage });
    }
    else {
      this.pages.push({ title: 'Login', component: LoginPage });
    }
  }

  openPage(page) {
    //In case of page Favoris
    if(page.component instanceof FavorisPage) {
      //this.modalCtrl.create()
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

