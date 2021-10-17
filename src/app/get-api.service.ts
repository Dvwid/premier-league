import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiService implements Resolve<Object> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Object | Observable<Object> | Promise<Object> {
    return this.http.get("https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc")
  }
  constructor(private http:HttpClient) {}
}
