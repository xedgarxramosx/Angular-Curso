import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spider-man', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];
  borrado :boolean = false;
  heroeBorrado : string = '';
  borrarHeroe(): void{
    console.log('borrando heroe...')
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = String(heroeBorrado);
    this.borrado = true;
  }
}

