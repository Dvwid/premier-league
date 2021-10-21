import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  standings: any[] = []
  clubs: any[] = []
  name: string = "";
  score: string = "";

  constructor(private activatedRoute: ActivatedRoute) {}
    
  ngOnInit():void{
    this.activatedRoute.data.subscribe((data) => {
      this.standings = data.league.data.standings;
      this.clubs = data.league.data.standings;
    })
  }
  resetClubs(){
    this.name = "";
    this.score = "";
    this.standings = this.clubs;
  }

  searchClubs(name:string, score:string){
    if(score){
      this.standings = this.clubs.filter((el) => el.stats[6].displayValue === score)
    }
    if(name){
      this.standings = this.clubs.filter((el) => el.team.name.toUpperCase().includes(name.toUpperCase()))
    }
    if(!score && !name){
      this.standings = this.clubs
    }
  }

}
