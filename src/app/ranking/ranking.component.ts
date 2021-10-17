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
  }
    
  ngOnInit():void{
    this.activatedRoute.data.subscribe((data) => {
      console.log(data)
      this.standings = data.league.data.standings;
      
    })
  }

}
