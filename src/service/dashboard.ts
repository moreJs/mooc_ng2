import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class DashboardService{
    private url = "/mooc.json";
    constructor(private http: Http){}

    fetchHotHouses() {
        return this.http.get(this.url);
    }

}