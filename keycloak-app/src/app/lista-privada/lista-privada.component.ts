import { Component, OnInit } from '@angular/core';
import { Contatos } from '../interface/contatos';
import { ContatosService } from '../services/contatos.service';

@Component({
  selector: 'lista-privada',
  templateUrl: './lista-privada.component.html',
  styleUrls: ['./lista-privada.component.scss']
})
export class ListaPrivadaComponent implements OnInit {

  errorMessage: string = null;
  contatos: Contatos[];

  constructor(private contatosService: ContatosService) { }

  ngOnInit(): void {

    this.contatosService.getListaPirvada().subscribe(
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
