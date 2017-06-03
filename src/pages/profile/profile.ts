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
    showQuestions: boolean = false;
    showPrompt: boolean = false;

    constructor(private navParams: NavParams, private testCandidateService:TestCandidateService){
        this.candidateEmail = this.navParams.data.candidateEmail;
    }

    ionViewDidLoad(){
        this.testCandidateService.getUserTests(this.candidateEmail).then(data => {
            this.userTests = data;
        });
    }

    questionToggle(){
        this.showQuestions = !this.showQuestions;
    }

    promptToggle(){
        this.showPrompt = !this.showPrompt;
    }

}