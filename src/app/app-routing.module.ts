import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

import { HomepageComponent } from './homepage/homepage.component';
import { RankingComponent } from './ranking/ranking.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'ranking', component: RankingComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
