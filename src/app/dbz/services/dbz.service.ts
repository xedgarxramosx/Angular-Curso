import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable() //clase que se puede inyectar
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'GOKU',
          poder: 15000
        },
        {
          nombre: 'VEGETA',
          poder: 8000
        }
      ];
      get personajes(): Personaje[]{
          return [...this._personajes];  //[] indica que es un arreglo y los "..." es un spred cada cada elemento independiente
      }
    constructor(){}   
    
    agrearPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}