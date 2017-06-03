import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { TestCandidateService } from '../../services/testCandidateService';

@Component({
    templateUrl: './profile.html',
    selector: 'profile-page'
})
export class ProfilePage{

    candidateEmail: any;
    userTests: any;

    constructor(private navParams: NavParams, private testCandidateService:TestCandidateService){
        this.candidateEmail = this.navParams.data.candidateEmail;
    }

    ionViewDidLoad(){
        this.testCandidateService.getUserTests(this.candidateEmail).then(data => {
            this.userTests = data;
        });
    }

}