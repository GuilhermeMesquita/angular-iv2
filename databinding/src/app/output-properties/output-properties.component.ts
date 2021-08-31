import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-properties',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() recebeFamilia = [];
  @Output() respostaFamilia = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.recebeFamilia);
  }

  incluiFamilia() {
    this.respostaFamilia.emit({
      "nome": "patricia",
      "idade": 12
    });
  }

}
