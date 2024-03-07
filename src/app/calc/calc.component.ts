import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css',
})
export class CalcComponent {
  num1: any = '';
  num2: any = '';
  total: number = 0;
  nomes: string = '';
  random: any;

  add() {
    this.total = this.num1 + this.num2;
  }

  sub() {
    this.total = this.num1 - this.num2;
  }

  div() {
    this.total = this.num1 / this.num2;
  }

  mul() {
    this.total = this.num1 * this.num2;
  }

  per() {
    this.total = (this.num1 / this.num2) * 100;
  }

  pot() {
    this.total = Math.pow(this.num1, this.num2);
  }

  getRandom() {
    this.random = Math.floor(Math.random() * 10);
    if (this.random == 0) this.nomes = '';
    if (this.random == 1) this.nomes = '';
    if (this.random == 2) this.nomes = '';
    if (this.random == 3) this.nomes = '';
    if (this.random == 4) this.nomes = '';
    if (this.random == 5) this.nomes = '';
    if (this.random == 6) this.nomes = '';
    if (this.random == 7) this.nomes = '';
    if (this.random == 8) this.nomes = '';
    if (this.random == 9) this.nomes = '';
  }
}
