import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetShareComponent } from './tweet-share.component';



@NgModule({
  declarations: [TweetShareComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TweetShareComponent
  ]
})
export class TweetShareModule { }
