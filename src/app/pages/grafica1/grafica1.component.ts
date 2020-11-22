import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  label1:string[] = ['Pruebas', 'Test'];
  data1:number[] = [700, 950];
  color1:any = [{ backgroundColor: [ '#000000', '#d9534f' ]}];

  label2:string[] = ['Máximo', 'Décimo', 'Meridio'];
  data2:number[] = [10, 5, 3];
  color2:any = [{ backgroundColor: [ '#000000', '#d9534f', '#5cb85c' ]}];

  label3:string[] = ['Toy Story', 'Cambios extraños'];
  data3:number[] = [1999, 2018];
  color3:any = [{ backgroundColor: [ '#0275d8', '#d9534f' ]}];

  label4:string[] = ['Last', 'End'];
  data4:number[] = [500, 500];
  color4:any = [{ backgroundColor: [ '#f0ad4e', '#d9534f' ]}];
}
