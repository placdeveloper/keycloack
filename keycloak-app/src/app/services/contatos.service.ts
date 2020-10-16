import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse } from '@angular/common/http';
import { KeycloakSecurityService } from './keycloak-security.service';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Contatos } from './../interface/contatos';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  constructor(private http: HttpClient, private keycloakSecurityService: KeycloakSecurityService) { }
  
  public getListaRestrita() {
    return this.http
      .get<Contatos[]>('http://localhost:8080/contatos/restrita').pipe(
        catchError(this.handleError),
        tap(data => console.log('data', data))
      );
  }


  public getListaPublica() {
    return this.http
      .get<Contatos[]>('http://localhost:8080/contatos/publica').pipe(
        catchError(this.handleError),
         tap(data => console.log('data: ', data))
      );
  }

  public getListaPirvada() {
    return this.http
      .get<Contatos[]>('http://localhost:8080/contatos/privado').pipe(
        catchError(this.handleError),
        tap(data => console.log('data', data))
      );
  }


  private handleError(errorRes: HttpErrorResponse) {
    console.log('errorRes', errorRes)
    let errorMessage = 'an unknown error occured';
    if (!errorRes.error || !errorRes.error.error || !errorRes.error.message) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.message) {
      case 'Forbidden':
        errorMessage = 'Acesso negado';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'este Email não existe';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'A senha está incorreta';
        break;

    }
    return throwError(errorMessage);
  }
}
