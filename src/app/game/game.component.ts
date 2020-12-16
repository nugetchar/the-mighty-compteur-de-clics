import { Component, NgProbeToken, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  private static readonly GAME_DURATION = 10000;
  private static readonly INTERVAL = 1000;

  _isStarted!: boolean;
  _isEnded!: boolean;

  time!: number;
  score!: number;
  interval!: number;

  constructor() { }

  ngOnInit(): void {
  }

  launchGame() {
    this.score = 0;
    this._isEnded = false;
    this.time = GameComponent.GAME_DURATION / 1000;
    this._isStarted = true;

    this.interval = window.setInterval(() => { 
      this.time--; 
      if(this.time <= 0) {
        this.endGame();
      }
    }, GameComponent.INTERVAL);
  }

  private endGame() {
    this._isEnded = true;
    this._isStarted = false;
    window.clearInterval(this.interval);
  }

  increaseCount() {
    if (this._isEnded) {
      return;
    }

    this.score++;
  }

  preventSelection($event: MouseEvent) {
    $event.preventDefault();
  }

  get tweetText() {
    return `I clicked over ${this.score} times in ${GameComponent.GAME_DURATION / 1000}s!`
  }
}
