import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MapaPage } from '../mapa/mapa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToMapa() {
    this.navCtrl.push(MapaPage, {});
  }

}
