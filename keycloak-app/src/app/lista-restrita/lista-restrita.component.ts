import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../services/contatos.service';
import { Contatos } from './../interface/contatos';

@Component({
  selector: 'app-lista-restrita',
  templateUrl: './lista-restrita.component.html',
  styleUrls: ['./lista-restrita.component.scss']
})
export class ListaRestritaComponent implements OnInit {
  
  contatos: Contatos[];
  errorMessage: string = null;

  constructor(private contatosService: ContatosService) { }

  ngOnInit(): void {
    this.contatosService.getListaRestrita().subscribe(
      data => {
        this.contatos = data;
      },
      err => {
        this.errorMessage = err;
        console.log('errorrr ! ', err)
      }
    );

  }

}
