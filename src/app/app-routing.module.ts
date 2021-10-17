import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { GetApiService } from './get-api.service';
import { HomepageComponent } from './homepage/homepage.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'ranking', component: RankingComponent, resolve: { league:GetApiService}},
  { path: '**', component: ErrorComponent},
  {
    path: "courses", loadChildren: ()=> import('./ranking/ranking.component')
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
