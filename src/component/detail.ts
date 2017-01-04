import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DashBoardEntity } from '../entity/dashboard';
import { DashboardService } from '../service/dashboard';

import 'rxjs';

@Component({
    selector: 'ngdemo-detail',
    templateUrl: '../src/template/detail.html',
    styleUrls: ['../src/styles/detail.css'],
    viewProviders: [ DashboardService]
})
export class DetailComponent implements OnInit{
    house: DashBoardEntity ;

    constructor(private route: ActivatedRoute, private locatoin: Location, private service: DashboardService) {
        this.house = new DashBoardEntity('','',0);
    }

    ngOnInit() {
        let id = null;
        this.route.params
                  .switchMap(params => {
                      id = params['id'];
                      return this.service.fetchHotHouses();
                  })
                  .subscribe(value => {
                      let ret = value.json();
                      let houses = ret['houses'];
                      this.house = houses.filter(item => {
                          return item.id === id;
                      })[0];
                  });
    }

    back() {
        this.locatoin.back();
    }

}