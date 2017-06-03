import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import * as config from '../assets/config';

@Injectable()
export class TestCandidateService{

    private apiKey: string = config.small_key;
    private apiKeyLg: string = config.large_key
    private apiBaseUrl: string = config.api_base_url;

    constructor(private http:Http){}

    getTestCandidates(testID: string): Promise<any> {
        return new Promise( resolve => {
            this.http.get(this.apiBaseUrl + "/tests/" + testID + "/candidates/?limit=50?&access_token=" + this.apiKey)
            .map(res => res.json()).subscribe(data => {resolve(data.data)
            });
        });
    }

    getTestCandidateById(testID: string, candidateID: string): Promise<any> {
        return new Promise( resolve => {
            this.http.get(this.apiBaseUrl + "tests/" + testID + "/candidates/" + candidateID + "?access_token=" + this.apiKey)
            .map(res => res.json()).subscribe(data => {resolve(data.data)
            });
        });
    }

    getTestCandidateByEmail(testId: string, candidateEmail: string): Promise<any> {
        return new Promise( resolve => {
            this.http.get(this.apiBaseUrl + "tests/" + testId + "/candidates/view?username=" + candidateEmail + "&access_token=" + this.apiKey)
            .map(res => res.json()).subscribe(data => {resolve(data.data)
            });
        });
    }

    getTestCandidatesVOne(testID: string): Promise<any> {
        return new Promise( resolve => {
            this.http.get("https://www.hackerrank.com/x/api/v1/tests/" + testID + "/attempts?state=-1&ats=-1&sEcho=1&iColumns=10&sColumns=%2C%2C%2C%2C%2C%2C%2C%2C%2C&iDisplayStart=0&iDisplayLength=25&mDataProp_0=0&bSortable_0=false&mDataProp_1=1&bSortable_1=true&mDataProp_2=2&bSortable_2=true&mDataProp_3=3&bSortable_3=true&mDataProp_4=4&bSortable_4=true&mDataProp_5=5&bSortable_5=false&mDataProp_6=6&bSortable_6=false&mDataProp_7=7&bSortable_7=false&mDataProp_8=8&bSortable_8=false&mDataProp_9=9&bSortable_9=false&iSortCol_0=3&sSortDir_0=desc&iSortingCols=1&_=1496326556462&access_token=" + this.apiKey)
            .map(res => res.json()).subscribe(data => {resolve(data)
            });
        });
    }

    getUserTests(userEmail: string): Promise<any> {
        return new Promise(resolve => {
            this.http.get("./assets/mockData/profile.json")
            .map(res => res.json()).subscribe(data => {resolve(data.data)
            });
        });
    }

}