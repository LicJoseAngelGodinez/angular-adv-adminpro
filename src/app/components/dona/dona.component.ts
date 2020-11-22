import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  @Input() title:string = "Sin title"; 
  @Input() label:string[] = ['Descargas', 'Ventas en tienda', 'Ventas por correo'];
  @Input() data:number[] = [350, 450, 100];
  @Input() color:any = [{ backgroundColor: [ '#0275d8', '#f0ad4e', '#d9534f' ]}];

  // Doughnut
  //public doughnutChartLabels: Label[] = this.label;
  //public doughnutChartData: MultiDataSet = [ this.data ];
  //public doughnutChartColors: Color[] = this.color;
}
