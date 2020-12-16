import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './game-routing.module';
import { TweetShareModule } from '../tweet-share/tweet-share.module';

@NgModule({
  declarations: [GameComponent],
  imports: [CommonModule, GameRoutingModule, TweetShareModule],
})
export class GameModule {}
