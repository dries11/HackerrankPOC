import { Component } from '@angular/core';
import { NavParams, ViewController, NavController } from 'ionic-angular';
import { QuestionPage } from '../question/question';

@Component({
    selector: 'profile-questions',
    templateUrl: './questionModal.html'
})
export class QuestionModal{

    questions: any;

    constructor(private navParams:NavParams, private viewCtrl:ViewController, private navCtrl:NavController){
        this.questions = navParams.data.questions;
    }

    close(){
        this.viewCtrl.dismiss();
    }

    toQuestionPage(question){
        this.navCtrl.push(QuestionPage, {
            question: question
        });
    }


}