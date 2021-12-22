import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino:string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService ){}

  buscar(capital: string){
    this.termino = '';

    this.paisService.buscarCapital(capital)
        .subscribe( paises => {
          this.paises = paises;
        },
          error => {
            this.termino = capital;
            this.paises = [];
          }
        )
  }

  sugerencias( termino: string ){

  }

}
