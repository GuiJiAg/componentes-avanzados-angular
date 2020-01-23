import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConEstadoComponent } from './con-estado/con-estado.component';
import { SinEstadoComponent } from './sin-estado/sin-estado.component';
import { AlertaConfirmacionComponent } from './alerta-confirmacion/alerta-confirmacion.component';
import { ContenedorImagenComponent } from './contenedor-imagen/contenedor-imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    ConEstadoComponent,
    SinEstadoComponent,
    AlertaConfirmacionComponent,
    ContenedorImagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
