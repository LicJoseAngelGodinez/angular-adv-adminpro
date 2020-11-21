import { Component } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Descargas', 'Ventas en tienda', 'Ventas por correo'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartColors: Color[] = [
    { backgroundColor: [ '#0275d8', '#f0ad4e', '#d9534f' ] }
  ];

}
