import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsterComponent } from './pollster.component';

describe('PollsterComponent', () => {
  let component: PollsterComponent;
  let fixture: ComponentFixture<PollsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
