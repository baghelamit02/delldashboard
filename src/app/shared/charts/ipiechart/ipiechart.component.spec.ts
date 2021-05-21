import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpiechartComponent } from './ipiechart.component';

describe('IpiechartComponent', () => {
  let component: IpiechartComponent;
  let fixture: ComponentFixture<IpiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpiechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
