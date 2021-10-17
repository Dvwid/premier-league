import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient) {

   }

  apiCall(){
    return this.http.get("https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc")
  }
}
