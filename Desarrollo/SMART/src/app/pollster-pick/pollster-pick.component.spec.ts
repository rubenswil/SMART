import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsterPickComponent } from './pollster-pick.component';

describe('PollsterPickComponent', () => {
  let component: PollsterPickComponent;
  let fixture: ComponentFixture<PollsterPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsterPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsterPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
