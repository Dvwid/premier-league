import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private api:GetApiService){
    
  }

  league:any[] = []
  standings: any[] = []

  ngOnInit(){
    this.api.apiCall().subscribe((league: any) => {
      this.league = league.data
      this.standings = league.data.standings
      console.log(league.data)
      console.log(league.data.standings)
    })
  }
  
}
