import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {

  num1: number = 0;
  num2: number = 0;
  total: number = 0;

  add(){
    this.total = this.num1 + this.num2;
  }
}
