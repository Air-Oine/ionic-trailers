import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ApiService} from '../../services/api.service';
import {TrailerPage} from '../trailer/trailer';

import * as lodash from 'lodash';

/**
 * Generated class for the TrailersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trailers',
  templateUrl: 'trailers.html'
})
export class TrailersPage {

  trailers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiService) {

  }

  ngOnInit() {
    this.api.getTrailers()
      .subscribe(
        trailers => {
          console.log('Trailers', trailers.json());
          
          this.trailers = lodash.sortBy(trailers.json(), ['title']);
        },
        error => console.log('Error Http', error)
      );
  }

  openDetail(trailer: any) {
    this.navCtrl.push(TrailerPage, {trailer: trailer});
  }

}
