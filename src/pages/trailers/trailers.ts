import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ApiService} from '../../services/api.service';

/**
 * Generated class for the TrailersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trailers',
  templateUrl: 'trailers.html',
})
export class TrailersPage {

  trailers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiService) {

  }

  ngOnInit() {
    this.api.getTrailers()
      .subscribe(
        trailers => {
          console.log('Trailers', trailers);
          this.trailers = trailers;
        },
        error => console.log('Error Http', error)
      );
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TrailersPage');
  }

}
