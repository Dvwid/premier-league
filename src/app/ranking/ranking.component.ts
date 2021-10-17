import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  standings: any[] = []
  
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.standings.length) 
  }
    
  ngOnInit():void{
    this.activatedRoute.data.subscribe((data) => {
      this.standings = data.league.data.standings;
      console.log(data)
    })
  }

}
