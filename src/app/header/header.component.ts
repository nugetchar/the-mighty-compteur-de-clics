import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tweetText: string = 'Hey, come and try this new game!';
  constructor() { }

  ngOnInit(): void {
  }

}
