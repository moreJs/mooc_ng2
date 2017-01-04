import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DashboardService } from '../service/dashboard';
import { DashBoardEntity } from '../entity/dashboard';
@Component({
    selector: 'ngdemo-list',
    templateUrl: '../src/template/list.html',
    styleUrls: ['../src/styles/list.css'],
    providers: [ DashboardService ]
})
export class ListComponent implements OnInit{
    title: string = '所有房源';
    houses: Array<DashBoardEntity>;
    constructor(private dashboardService: DashboardService, private router: Router) {}

    ngOnInit() {
        this.fecth();
    }

    private fecth() {
        this.dashboardService.fetchHotHouses()
                            .subscribe(value => {
                                let results = value.json();
                                this.houses = results['houses']
                            });
    }

    private goDetail(id) {
        this.router.navigate(['/detail', id]);
    }
}