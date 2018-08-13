import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarItemGroupComponent } from './sidebar-item-group.component';

describe('SidebarItemGroupComponent', () => {
  let component: SidebarItemGroupComponent;
  let fixture: ComponentFixture<SidebarItemGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarItemGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarItemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
