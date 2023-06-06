import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-deduction',
  templateUrl: './deduction.component.html',
})
export class DeductionComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }


  public totalDeduction: number = 0;

  updateTotalDeduction(event: any) {
    let salary = this.deductionDetails.get("salary")?.value;
    let interest = this.deductionDetails.get("interest")?.value;
    this.totalDeduction = salary + interest
    localStorage.setItem("totalDeduction", this.totalDeduction.toString());
  }

  deductionDetails = this._formBuilder.group({
    salary: [''],
    interest: [''],
  });



  ngOnInit(): void {
  }

}
