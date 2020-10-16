import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListaPrivadaComponent } from './lista-privada/lista-privada.component';
import { ListaPublicaComponent } from './lista-publica/lista-publica.component';
import { ListaRestritaComponent } from './lista-restrita/lista-restrita.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'restrita', component: ListaRestritaComponent },
  { path: 'publico', component: ListaPublicaComponent },
  { path: 'privado', component: ListaPrivadaComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
