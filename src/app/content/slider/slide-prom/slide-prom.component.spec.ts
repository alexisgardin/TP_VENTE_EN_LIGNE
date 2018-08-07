import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePromComponent } from './slide-prom.component';

describe('SlidePromComponent', () => {
  let component: SlidePromComponent;
  let fixture: ComponentFixture<SlidePromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidePromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
