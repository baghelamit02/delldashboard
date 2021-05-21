import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageareaComponent } from './percentagearea.component';

describe('PercentageareaComponent', () => {
  let component: PercentageareaComponent;
  let fixture: ComponentFixture<PercentageareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
