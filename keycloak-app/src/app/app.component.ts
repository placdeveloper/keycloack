import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from './services/keycloak-security.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'keycloak-app';
  constructor(private keycloakSecurityService: KeycloakSecurityService) { }
  isAuth = false;
  keycloak: any;
  userInformations: any;
  ngOnInit() {
    this.keycloak = this.keycloakSecurityService.keycloak;
    //console.log(this.keycloak);
     //console.log('hasRealmRole', this.keycloak.hasRealmRole('admin'));
     //console.log('hasResourceRole', this.keycloak.hasResourceRole('admin'));
     //console.log(this.keycloakSecurityService.keycloak.token)
     //console.log(preferred_username)
    this.isAuth = this.keycloak.authenticated;
    this.userInformations = this.isAuth ? this.keycloak.idTokenParsed : {};
    // console.log(this.userInformations);
  }

  onLogin() {
    this.keycloak.login();
  }
  onLogout() {
    this.keycloak.logout();
  }
  ManagedAccount() {
    this.keycloak.accountManagement();
  }
  isAppManager() {
    return this.keycloak.hasRealmRole('app-user');
  }
  isAppAdmin() {
    return this.keycloak.hasRealmRole('app-admin');
  }
}
