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
  hayError:boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ){}

  buscar(){
    this.hayError = false;

    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        this.paises = paises;
      }, (error) => {
        this.hayError = true;
        this.paises = [];
      });
  }

}
