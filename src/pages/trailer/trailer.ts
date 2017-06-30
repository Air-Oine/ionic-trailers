import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrailerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-trailer',
  templateUrl: 'trailer.html',
})
export class TrailerPage {
  trailer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let param = navParams.get('trailer');
    console.log(param);
    if(param) {
      this.trailer = param;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrailerPage');
  }

}
