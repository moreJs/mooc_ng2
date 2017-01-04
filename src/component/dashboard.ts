import { Component, OnInit } from '@angular/core';

import { DashBoardEntity } from '../entity/dashboard';
import { DashboardService } from '../service/dashboard';


@Component({
    selector: 'ngdemo-dashboard',
    templateUrl: '../src/template/dashboard.html',
    styleUrls: ['../src/styles/dashboard.css'],
    providers: [ DashboardService ]
})
export class DashBoardComponent implements OnInit{
    title: string = '热门房源';
    houses: Array<DashBoardEntity>;

    constructor(private dashboardService: DashboardService) {}

    ngOnInit() {
        this.fetchData();
    }

    fetchData() {
        this.dashboardService.fetchHotHouses()
                             .subscribe(value => {
                                 let body = value.json();
                                 this.houses = body['houses_hot'].map(house => {
                                     return house;
                                 });
                             });
    }
    
}