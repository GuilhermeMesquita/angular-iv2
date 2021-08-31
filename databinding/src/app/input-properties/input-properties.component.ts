import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-properties',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css'],
  inputs: ['nomePessoa:nome']
})
export class InputPropertiesComponent implements OnInit {
  @Input() nome: string = "";

  familia: any = [{
    nome: "Jose",
    idade: 23,
  },
  {
    nome: "Joseph",
    idade: 22,
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  recebeParente(parente: any) {
    this.familia.push(parente);
  }

}
