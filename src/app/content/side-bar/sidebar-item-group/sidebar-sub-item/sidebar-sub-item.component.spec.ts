import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSubItemComponent } from './sidebar-sub-item.component';

describe('SidebarSubItemComponent', () => {
  let component: SidebarSubItemComponent;
  let fixture: ComponentFixture<SidebarSubItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSubItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
