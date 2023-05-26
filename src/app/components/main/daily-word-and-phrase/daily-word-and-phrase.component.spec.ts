import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWordAndPhraseComponent } from './daily-word-and-phrase.component';

describe('DailyWordAndPhraseComponent', () => {
  let component: DailyWordAndPhraseComponent;
  let fixture: ComponentFixture<DailyWordAndPhraseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyWordAndPhraseComponent]
    });
    fixture = TestBed.createComponent(DailyWordAndPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
