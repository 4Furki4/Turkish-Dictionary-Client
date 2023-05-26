import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionComponent } from './definition.component';

describe('DefinitionComponent', () => {
  let component: DefinitionComponent;
  let fixture: ComponentFixture<DefinitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefinitionComponent]
    });
    fixture = TestBed.createComponent(DefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
