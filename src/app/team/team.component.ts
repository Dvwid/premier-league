import { Component, Input } from '@angular/core';
import { Team } from '../team-module';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  @Input()
  teamDetails:Team
}
