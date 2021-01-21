import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-share',
  templateUrl: './tweet-share.component.html',
  styleUrls: ['./tweet-share.component.scss']
})
export class TweetShareComponent implements OnInit {

  private base = 'https://twitter.com/intent/tweet';

  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

  get tweetText() {
    return `${this.base}?text=${this.text}&via=nugetchar&url=${window.location.origin}`
  }
}
