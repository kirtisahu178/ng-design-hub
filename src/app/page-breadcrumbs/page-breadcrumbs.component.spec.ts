import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBreadcrumbsComponent } from './page-breadcrumbs.component';

describe('PageBreadcrumbsComponent', () => {
  let component: PageBreadcrumbsComponent;
  let fixture: ComponentFixture<PageBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBreadcrumbsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
