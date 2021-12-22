import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country, Translation } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  traducciones!: { [key: string]: Translation };

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
        .pipe( 
          switchMap( ({idPais}) => this.paisService.getPaisPorCodigo( idPais ) )       
        )
        .subscribe(pais => {
          this.pais = pais;
        });

        // tap( resp => console.log(resp) ) Sirve para ejecutar el console log con la respuesta del switchMap

    // this.activatedRoute.params
    //   .subscribe(({ idPais }) => {

    //     this.paisService.getPaisPorCodigo(idPais)
    //       .subscribe(pais => {
    //         console.log(pais[0]);
    //       })

    //   })
  }

  volver(){
    this.location.back();
  }

}
