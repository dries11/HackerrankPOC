import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'question',
    templateUrl: './question.html'
})
export class QuestionPage{

    question: any;

    constructor(private navParams:NavParams){
        this.question = this.navParams.data.question;
    }

    

}