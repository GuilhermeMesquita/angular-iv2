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
