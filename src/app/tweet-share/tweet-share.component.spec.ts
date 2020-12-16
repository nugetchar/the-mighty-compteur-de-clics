import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetShareComponent } from './tweet-share.component';

describe('TweetShareComponent', () => {
  let component: TweetShareComponent;
  let fixture: ComponentFixture<TweetShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
