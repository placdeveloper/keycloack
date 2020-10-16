import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRestritaComponent } from './lista-restrita.component';

describe('ListaRestritaComponent', () => {
  let component: ListaRestritaComponent;
  let fixture: ComponentFixture<ListaRestritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRestritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRestritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
