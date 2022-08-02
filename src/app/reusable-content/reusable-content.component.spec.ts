import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableContentComponent } from './reusable-content.component';

describe('ReusableContentComponent', () => {
  let component: ReusableContentComponent;
  let fixture: ComponentFixture<ReusableContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
