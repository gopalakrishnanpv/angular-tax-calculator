import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
})
export class IncomeComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }

  public totalIncome: number = 0;

  updateTotalIncome(event: any) {
    let salary = this.incomeDetails.get("salary")?.value;
    let interest = this.incomeDetails.get("interest")?.value;
    this.totalIncome = salary + interest
    localStorage.setItem("totalIncome", this.totalIncome.toString());
  }

  incomeDetails = this._formBuilder.group({
    salary: [''],
    interest: [''],
  });

  ngOnInit(): void {
  }

}
