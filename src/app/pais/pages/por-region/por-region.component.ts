import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent{

  termino: string = '';
  paises: Country[] = [];

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  constructor( private paisService: PaisService ){}

  buscar( region: string ){

    if(region === this.regionActiva){return}

    this.termino = '';
    this.regionActiva = region;    
    this.paises = [];

    this.paisService.buscarRegion(region)
        .subscribe( paises => {
          this.paises = paises;
        },
          error => {
            this.termino = region;
          }
        )
  }

  getClaseCSS( region: string ): string{
    return (region === this.regionActiva) ? 'btn btn-primary ms-2' : 'btn btn-outline-primary ms-2';
  }
}
