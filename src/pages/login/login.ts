import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormsModule }  from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string = "";
  password: string = "";
  rememberMe: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  save() {
    //Check password
    if(this.password === "123456") {
      var user = {email: this.email, password: this.password, rememberMe: this.rememberMe};

      window.localStorage.setItem('user', JSON.stringify(user));
    }

    this.navCtrl.goToRoot(null);
  }
}
