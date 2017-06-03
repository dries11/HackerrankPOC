import { Component } from '@angular/core';
import { ViewController, NavParams, LoadingController, NavController } from 'ionic-angular';

import { ProfilePage } from '../../pages/profile/profile';

import { TestCandidateService } from '../testCandidateService';
import { TestService } from '../testService';


@Component({
    selector: 'candidate-info',
    templateUrl: './candidateInfo.html',
})
export class CandidateInfoPage{

    candidate: any;
    testId: any;
    questions: [any];
    loading: any;

    constructor(private navParams:NavParams, private viewCtrl:ViewController, private testCandidateService:TestCandidateService, private testService:TestService, private loadingCtrl:LoadingController, private navCtrl:NavController){
        this.candidate = this.navParams.data.candidate;
        this.testId = this.navParams.data.testId;
    }

    ionViewDidLoad(){
        this.loadData();
    }

    loadData(){
        this.presentLoading();
        this.testCandidateService.getTestCandidateById(this.testId, this.candidate.attempt_id).then(data => {
            this.questions = data.questions;
        }).then(() => {
            this.loading.dismiss();
        });
    }

    presentLoading() {
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            showBackdrop: false
        });
        this.loading.present();
    }

    goToProfile(candidateEmail){
        this.navCtrl.push(ProfilePage, {candidateEmail: candidateEmail});
    }
}