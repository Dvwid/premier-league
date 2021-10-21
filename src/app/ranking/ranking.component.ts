import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  teams: Array<any> = []
  clubs: Array<any> = []
  name: string = "";
  score: string = "";

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
        scoreString: element.stats[6].displayValue
      }))
      this.clubs = this.teams
    })
  }
  resetClubs():void{
    this.name = "";
    this.score = "";
    this.teams = this.clubs;
  }

  searchClubs(name:string, score:string):void{
    if(score){
      this.teams = this.clubs.filter((team) => team.scoreString === score)
    }
    if(name){
      this.teams = this.clubs.filter((team) => team.name.toUpperCase().includes(name.toUpperCase()))
    }
    if(!score && !name){
      this.teams = this.clubs
    }
  }

}
