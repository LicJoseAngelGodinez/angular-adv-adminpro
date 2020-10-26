import { Component } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {
  progreso:number = 50;

  get getPorcentaje() {  
    return `${this.progreso}%`;  
  };

  cambiarValor ( valor:number ) { 
   
    let agregaValor = true;

   if ( this.progreso == 0 && valor < 1 ) {
   	agregaValor = false;
   } 

   if ( this.progreso == 100 && valor > 1 ) {
   	agregaValor = false;
   }

   if ( agregaValor ) {
  	this.progreso = this.progreso + valor;  
   }
     
  };
}
