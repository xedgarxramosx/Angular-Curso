import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';

interface Personaje{
  nombre: string,
  poder: number
}
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {
  // @Input() personajes: Personaje[] = []

  get personajes(){
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService){
    
  }
}
