import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfsComponent } from './shelfs.component';

describe('ShelfsComponent', () => {
  let component: ShelfsComponent;
  let fixture: ComponentFixture<ShelfsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShelfsComponent]
    });
    fixture = TestBed.createComponent(ShelfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
