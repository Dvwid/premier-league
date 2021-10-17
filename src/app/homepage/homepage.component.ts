import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUrl()
{
  return "url('https://fv2-4.failiem.lv/thumb_show.php?i=7c67brrxm&view')";
}

}
