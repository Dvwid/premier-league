import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../team-module';

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

  teams: Array<Object> = []

  constructor(private activatedRoute: ActivatedRoute) {}
    
  ngOnInit():void{
    this.activatedRoute.data.subscribe((data) => {
      data.league.data.standings.map((element:any) => this.teams.push({
        name: element.team.name,
        rank: element.stats[8].value,
        imgUrl: element.team.logos[0].href,
        points: element.stats[6].value,
        abbreviation: element.team.abbreviation,
        wins:element.stats[0].value,
        draws:element.stats[2].value,
        losses:element.stats[1].value,
        goals:element.stats[4].value,
        goalsAgainst:element.stats[5].value,
        difference:element.stats[9].value,

      }))
      this.standings = data.league.data.standings;
      this.clubs = data.league.data.standings;
      console.log(this.teams)
      
    })
  }
  resetClubs():void{
    this.name = "";
    this.score = "";
    this.standings = this.clubs;
  }

  searchClubs(name:string, score:string):void{
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
