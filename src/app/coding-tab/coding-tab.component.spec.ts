import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingTabComponent } from './coding-tab.component';

describe('CodingTabComponent', () => {
  let component: CodingTabComponent;
  let fixture: ComponentFixture<CodingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
