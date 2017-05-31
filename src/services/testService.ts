import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService{

    private apiKey: string = "#######################";
    private apiBaseUrl: string = "https://www.hackerrank.com/x/api/v3/";

    constructor(private http:Http){}

    private createAuthHeader(headers: Headers){
        headers.append("Authorization", "Bearer " + this.apiKey);
    }

    getAllTests(): Promise<any>{
        let headers = new Headers();
        this.createAuthHeader(headers);
        return new Promise(resolve => {
            this.http.get(this.apiBaseUrl + "tests?limit=100&offset=0", { headers: headers})
            .map(res => res.json()).subscribe(data => { resolve(data);
            });
        });
    }

}