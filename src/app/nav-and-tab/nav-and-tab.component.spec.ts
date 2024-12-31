import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAndTabComponent } from './nav-and-tab.component';

describe('NavAndTabComponent', () => {
  let component: NavAndTabComponent;
  let fixture: ComponentFixture<NavAndTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavAndTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavAndTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
