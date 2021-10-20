import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input()
  name:string
  @Input()
  rank:number
  @Input()
  imgUrl:string
  @Input()
  points:number
  @Input()
  abbreviation:string
  @Input()
  wins:number
  @Input()
  draws:number
  @Input()
  losses:number
  @Input()
  goals:number
  @Input()
  goalsAgainst:number
  @Input()
  difference:number
 

  constructor() {
    this.name="",
    this.rank=0,
    this.imgUrl=""
    this.points=0;
    this.abbreviation="";
    this.wins=0;
    this.draws=0;
    this.losses=0;
    this.goals=0;
    this.goalsAgainst=0;
    this.difference=0;
   }



  ngOnInit(): void {
  }

}
