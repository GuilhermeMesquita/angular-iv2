import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  url: string = "https://faculdadeiv2.com.br";
  cursoAngular: boolean = true;
  imageURL: string = "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
  imageWidth: number = 50;
  valorAtual: string = '';
  valorSalvo: string = '';
  mouseover: boolean = true;

  getValor() {
    return 1;
  }

  getGoodCourse() {
    return true;
  }

  clickHere() {
    alert("Clicou no botão!");
  }

  onKeyup(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  saveData(input: any) {
    this.valorSalvo = input;
  }

  onMouseOver() {
    this.mouseover = !this.mouseover;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
