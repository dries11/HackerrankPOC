import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Chart } from 'chart.js';
import { TestService } from '../../services/testService';
import { TestCandidateService } from '../../services/testCandidateService';
import { CandidateInfoPage } from '../candidateInfo/candidateInfo';

@Component({
    selector: 'page-testDashboard',
    templateUrl: './testDashboard.html'
})
export class TestDashboard{

    @Input() test: any;
    @ViewChild('progressVsCompletedPieChart') progressVsCompletedPieChart;
    progressVsCompletedPieGraph: any;
    testCandidates: [any];
    averageScore: number;
    maximumScore: number;
    lowScore: number;
    highScore: number;

    constructor(private testService:TestService, private testCandidateService:TestCandidateService, private navCtrl:NavController, private navParams:NavParams, private modalCtrl:ModalController){
        this.test = this.navParams.data;
    }

    ionViewDidLoad(){
        this.loadData();
        this.maximumScore = this.test.totalpoints;
    }

    loadData() {
        this.testCandidateService.getTestCandidatesVOne(this.test.id).then(data => {
            this.testCandidates = data.models;
        }).then(()=> {
            this.getAverageScore(this.testCandidates);
        }).then(()=> {
            this.loadGraph();
        })
    }

    loadGraph(){
        this.progressVsCompletedPieGraph = new Chart(this.progressVsCompletedPieChart.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ['Invited','In-Progress','Completed'],
                datasets: [{
                    label: '# of Students',
                    data: [this.test.invited, this.test.inprogress, this.test.completed],
                    backgroundColor: ['rgba(243,184,21,0.2)', 'rgba(16,77,99,0.2)', 'rgba(0,172,125,0.2)'],
                    hoverBackgroundColor: ['#F3B815', '#104d63', '#00AC7D']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    getAverageScore(data: [any]) {
        let divideBy = data.length;
        this.highScore = 0;
        this.lowScore = this.maximumScore;
        var totalScore: number = 0;
        for(var i = 0; i < data.length; i++){
            totalScore += data[i].score;
            if(data[i].score > this.highScore){
                this.highScore = data[i].score;
            }
            if(data[i].score < this.lowScore){
                this.lowScore = data[i].score;
            }
        }
        this.averageScore = totalScore/divideBy;
        this.averageScore = Math.round(this.averageScore * 100) / 100;
    }

    toCandidateInfoPage(candidate){
        this.navCtrl.push(CandidateInfoPage, {
            candidate: candidate,
            testId: this.test.id
        });
    }

}