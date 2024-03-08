import { Component } from '@angular/core';
import { inject, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css',
})
export class CalcComponent {
  private offcanvasService = inject(NgbOffcanvas);

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      position: 'end',
      backdrop: 'static',
      backdropClass: 'bg-dark',
      panelClass: 'bg-dark',
    });

    this.random = Math.floor(Math.random() * 10);
    if (this.random == 0) this.phrase = 'You will have luck on love';
    if (this.random == 1) this.phrase = 'You will have a sad future,';
    if (this.random == 2) this.phrase = 'You are in great danger';
    if (this.random == 3) this.phrase = 'You will conquer great things';
    if (this.random == 4) this.phrase = 'You will be in a major accident';
    if (this.random == 5) this.phrase = 'Your end draws near';
    if (this.random == 6) this.phrase = 'Money is comming your way';
    if (this.random == 7) this.phrase = 'Pay attention to your surroundings';
    if (this.random == 8) this.phrase = 'Beware fat white cats';
    if (this.random == 9) this.phrase = 'Avoid travelling this year';
  }

  num1: any = '';
  num2: any = '';
  total: number = 0;
  phrase: string = '';
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
}
