import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPublicaComponent } from './lista-publica.component';

describe('ListaPublicaComponent', () => {
  let component: ListaPublicaComponent;
  let fixture: ComponentFixture<ListaPublicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPublicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
