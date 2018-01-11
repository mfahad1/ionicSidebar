import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  browser;
  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser
  ) {
  }

  public  openBrowser() {
    this.browser = this.iab.create('//sysmtech.com/hblbank/');
  }
}
