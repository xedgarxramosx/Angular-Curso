import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // get personajes(): Personaje[]{
  //   return this.dbzServices.personajes;
  // }

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // agregarNuevoPersonaje(argumento: Personaje){
  //   // this.personajes.push(argumento);
  // }

  constructor(){  //inyeccion de dependencias, estamos inyectandolo en este componentw

  }
}
