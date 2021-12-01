import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonarribaComponent } from './buttonarriba.component';

describe('ButtonarribaComponent', () => {
  let component: ButtonarribaComponent;
  let fixture: ComponentFixture<ButtonarribaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonarribaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonarribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
