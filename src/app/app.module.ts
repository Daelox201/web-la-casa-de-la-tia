import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    MenuComponent,
    QuienesSomosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'inicio', component:InicioComponent},
      {path:'menu', component:MenuComponent},
      {path:'quienes-somos', component:QuienesSomosComponent},
      {path:'contacto', component:ContactoComponent},
      {path: '**', redirectTo:'/', pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
