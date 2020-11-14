import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit() {
	this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input() progreso:number = 50;
  @Input() btnClass:string = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor ( valor:number ) {  

	let actualizar: boolean = true;

   if ( this.progreso >= 100 && valor >= 0 ) {
    	this.valorSalida.emit(100);
    	this.progreso = 100;
    	actualizar = false;
   }

   if ( this.progreso <= 0 && valor < 0 ) {
    	this.valorSalida.emit(0);
    	this.progreso = 0;
    	actualizar = false;
   } 

   if ( actualizar ) {
	this.progreso = this.progreso + valor;
   	this.valorSalida.emit(this.progreso);
   } 
     
  };
}
