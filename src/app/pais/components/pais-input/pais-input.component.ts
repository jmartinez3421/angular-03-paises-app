import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(400)
      )
      .subscribe( valor => {
        if(this.termino !== ''){
          this.onDebounce.emit( valor );
        }
      } )
  }
  
  buscar(){
    this.onEnter.emit(this.termino);
    this.termino = '';
  }

  teclaPresionada(){

    this.debouncer.next( this.termino );

  }

  borrarValue(){
    this.termino = '';
  }

}
