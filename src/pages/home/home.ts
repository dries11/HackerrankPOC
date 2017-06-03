import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TestDashboard } from '../testDashboard/testDashboard';

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
    });
  }

  toDashBoard(test: any){
    var testToPass;
    this.testService.getOneTest(test.id).then(data => {
      testToPass = data;
    }).then(() => {
      this.navCtrl.push(TestDashboard, testToPass);
    })
  }

}
