import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, DoBootstrap } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KeycloakSecurityService } from './services/keycloak-security.service';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { ListaRestritaComponent } from './lista-restrita/lista-restrita.component';
import { ListaPublicaComponent } from './lista-publica/lista-publica.component';
import { ListaPrivadaComponent } from './lista-privada/lista-privada.component';


// export function keycloakFactory(keycloakSecurityService: KeycloakSecurityService) {
//   return () => keycloakSecurityService.init();
// }
const keycloakSecurityService = new KeycloakSecurityService();

@NgModule({
  declarations: [
    AppComponent,
    ListaPublicaComponent,
    ListaPrivadaComponent,
    ListaRestritaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    // { provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: keycloakFactory, multi: true },
    { provide: KeycloakSecurityService, useValue: keycloakSecurityService },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }

  ],
  entryComponents: [AppComponent]
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: import("@angular/core").ApplicationRef): void {
    keycloakSecurityService.init().then(data => {
      console.log('authenticated + toke :', data);
      appRef.bootstrap(AppComponent);

    }).catch(err => {
      console.error('err', err);
    });
  }
}
