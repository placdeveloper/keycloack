import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrivadaComponent } from './lista-privada.component';

describe('ListaPrivadaComponent', () => {
  let component: ListaPrivadaComponent;
  let fixture: ComponentFixture<ListaPrivadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPrivadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
