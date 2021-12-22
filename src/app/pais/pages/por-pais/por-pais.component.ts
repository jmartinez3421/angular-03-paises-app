import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino:string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService ){}

  buscar( pais: string ){
    this.termino = '';

    this.paisService.buscarPais(pais)
      .subscribe( (paises) => {
        this.paises = paises;
      }, (error) => {
        this.termino = pais;
        this.paises = [];
      });
  }

  sugerencias( termino: string ){
    
  }

}
