import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSitesComponent } from './manage-sites.component';

describe('ManageSitesComponent', () => {
  let component: ManageSitesComponent;
  let fixture: ComponentFixture<ManageSitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageSitesComponent]
    });
    fixture = TestBed.createComponent(ManageSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
