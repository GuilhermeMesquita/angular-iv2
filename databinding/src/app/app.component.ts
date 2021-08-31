import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  valorInicial: number = 5;
  detectaCiclo: boolean = false;
  // @ViewChild('campoInput') campoInputValue: ElementRef


  constructor() {

  }

  mudarValor() {
    // console.log(this.campoInputValue.nativeElement);
    this.valorInicial++;
  }

  destroyCiclo() {
    this.detectaCiclo = !this.detectaCiclo;
  }
}


