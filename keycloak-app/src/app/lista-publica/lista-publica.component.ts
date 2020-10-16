import { Component, OnInit } from '@angular/core';
import { Contatos } from './../interface/contatos';
import { ContatosService } from './../services/contatos.service';

@Component({
  selector: 'app-lista-publica',
  templateUrl: './lista-publica.component.html',
  styleUrls: ['./lista-publica.component.scss']
})
export class ListaPublicaComponent implements OnInit {
  
  errorMessage: string = null;
  contatos: Contatos[];

  constructor(private contatosService: ContatosService) { }

  ngOnInit(): void {

    this.contatosService.getListaPublica().subscribe(
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
