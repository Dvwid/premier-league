import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
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
}
