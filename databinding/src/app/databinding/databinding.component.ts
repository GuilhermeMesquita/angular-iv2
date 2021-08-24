import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  url: string = "https://faculdadeiv2.com.br";
  cursoAngular: boolean = true;

  getValor() {
    return 1;
  }

  getGoodCourse() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
