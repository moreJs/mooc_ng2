import { NgModule } from '@angular/core';

import { AppRouterModule } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './component/app';

import { DashBoardComponent } from './component/dashboard';
import { ListComponent } from './component/list';
import { DetailComponent } from './component/detail';

@NgModule({
    imports: [ AppRouterModule, HttpModule, FormsModule, BrowserModule ],
    declarations: [DashBoardComponent, ListComponent, DetailComponent, AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule{
}