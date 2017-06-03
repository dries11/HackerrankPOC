import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import * as config from '../assets/config';

@Injectable()
export class TestService{

    private apiKey: string = config.small_key;
    private apiKeyTwo: string = config.small_key;
    private apiBaseUrl: string = config.api_base_url;

    constructor(private http:Http){}

    getAllTests(): Promise<any>{
        return new Promise(resolve => {
            this.http.get(this.apiBaseUrl + "tests?limit=100&access_token=" + this.apiKey)
            .map(res => res.json()).subscribe(data => { resolve(data.data)
            });
        });
    }

    getOneTest(id: string): Promise<any>{
        return new Promise(resolve => {
            this.http.get(this.apiBaseUrl + "tests/" + id + "?&access_token=" + this.apiKey)
            .map(res => res.json()).subscribe(data => { resolve(data.data)
            });
        });
    }

}