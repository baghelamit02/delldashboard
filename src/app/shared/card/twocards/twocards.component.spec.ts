import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwocardsComponent } from './twocards.component';

describe('TwocardsComponent', () => {
  let component: TwocardsComponent;
  let fixture: ComponentFixture<TwocardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwocardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
