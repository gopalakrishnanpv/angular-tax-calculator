import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  public totalIncome: number = 0;
  public totalDeduction: number = 0;
  public totalTaxableIncome: number = 0;

  ngOnInit(): void {
    this.totalIncome = Number(localStorage.getItem("totalIncome"))
    this.totalDeduction = Number(localStorage.getItem("totalDeduction"))
    let taxableIncome = this.totalIncome - this.totalDeduction
    this.totalTaxableIncome = taxableIncome <= 0 ? 0 : taxableIncome;
  }

}
