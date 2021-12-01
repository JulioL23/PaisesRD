import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonabajoComponent } from './buttonabajo.component';

describe('ButtonabajoComponent', () => {
  let component: ButtonabajoComponent;
  let fixture: ComponentFixture<ButtonabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
