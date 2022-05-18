import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepDrinkingComponent } from './keep-drinking.component';

describe('KeepDrinkingComponent', () => {
  let component: KeepDrinkingComponent;
  let fixture: ComponentFixture<KeepDrinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepDrinkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepDrinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
