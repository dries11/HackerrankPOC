import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';

import { TestCandidateService } from '../../services/testCandidateService';
import { QuestionModal } from '../questionModal/questionModal';

@Component({
    templateUrl: './profile.html',
    selector: 'profile-page'
})
export class ProfilePage{

    candidateEmail: any;
    userTests: any;
    questions: any;

    constructor(private navParams: NavParams, private testCandidateService:TestCandidateService, private modalCtrl:ModalController){
        this.candidateEmail = this.navParams.data.candidateEmail;
    }

    ionViewDidLoad(){
        this.testCandidateService.getUserTests(this.candidateEmail).then(data => {
            this.userTests = data;
        });
    }

    showQuestions(test){
        let questionsModal = this.modalCtrl.create(QuestionModal, {
            questions: test.questions
        });
        questionsModal.present();
    }

}