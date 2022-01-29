import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTyComponent } from './listar-ty.component';

describe('ListarTyComponent', () => {
  let component: ListarTyComponent;
  let fixture: ComponentFixture<ListarTyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
