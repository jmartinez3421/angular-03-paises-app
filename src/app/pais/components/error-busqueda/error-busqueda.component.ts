import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-busqueda',
  templateUrl: './error-busqueda.component.html',
  styles: [
  ]
})
export class ErrorBusquedaComponent{
  @Input() termino:string = '';
}
