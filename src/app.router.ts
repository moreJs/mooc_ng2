import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';

import { DashBoardComponent } from './component/dashboard';
import { ListComponent } from './component/list';
import { DetailComponent } from './component/detail';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashBoardComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'heroes',     component: ListComponent }
];



@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRouterModule{}