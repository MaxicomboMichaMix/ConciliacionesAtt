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
import { GoogleChartComponent } from './components/google-chart/google-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AmarilloComponent,
    RojoComponent,
    MenuComponent,
    NaranjaComponent,
    GoogleChartComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
