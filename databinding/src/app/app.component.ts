import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  valorInicial: number = 5;
  detectaCiclo: boolean = false;


  constructor() {

  }

  mudarValor() {
    this.valorInicial++;
  }

  destroyCiclo() {
    this.detectaCiclo = !this.detectaCiclo;
  }
}


