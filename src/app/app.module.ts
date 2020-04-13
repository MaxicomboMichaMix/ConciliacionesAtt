import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import {APP_ROUTING} from './app.routes';

// Servicios

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AmarilloComponent } from './components/amarillo/amarillo.component';
import { RojoComponent } from './components/rojo/rojo.component';
import { MenuComponent } from './components/menu/menu.component';
import { NaranjaComponent } from './components/naranja/naranja.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AmarilloComponent,
    RojoComponent,
    MenuComponent,
    NaranjaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
