import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li:hover{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent{

  termino:string = '';
  terminoError:string ='';
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ){}

  buscar( pais: string ){
    this.termino = '';
    this.terminoError = '';
    this.mostrarSugerencias = false;

    this.paisService.buscarPais(pais)
      .subscribe( (paises) => {
        this.paises = paises;
      }, (error) => {
        this.termino = pais;
        this.paises = [];
      });
  }

  sugerencias( termino: string ){
    this.mostrarSugerencias = true;
    this.termino = termino;
    this.paisService.buscarPais(termino)
        .subscribe(paises => {
          this.paisesSugeridos = paises.splice(0, 4);
        })

  }

}
