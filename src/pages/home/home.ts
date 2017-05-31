import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TestService } from '../../services/testService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tests: [any];

  constructor(public navCtrl: NavController, public testService:TestService) {
    this.getAllTests();
  }

  getAllTests(){
    this.testService.getAllTests().then(result => {
      this.tests = result;
      console.log(result);
    });
  }

}
