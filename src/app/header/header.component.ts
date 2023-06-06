import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalIncome: number = 0;
  totalDeduction: number = 0;
  totalTaxableIncome: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalIncome = Number(localStorage.getItem("totalIncome"));
    this.totalDeduction = Number(localStorage.getItem("totalDeduction"));
    let taxableIncome = this.totalIncome - this.totalDeduction
    this.totalTaxableIncome = taxableIncome <= 0 ? 0 : taxableIncome;
  }

}
