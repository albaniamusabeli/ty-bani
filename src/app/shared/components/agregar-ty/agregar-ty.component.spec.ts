import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTyComponent } from './agregar-ty.component';

describe('AgregarTyComponent', () => {
  let component: AgregarTyComponent;
  let fixture: ComponentFixture<AgregarTyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
