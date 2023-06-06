import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  ageGroups = [
    { "name": "Citizen (<= 60 years)", value: "citizen" },
    { "name": "Senior Citizen (60 years - 80 years)", value: "senior-citizen" },
    { "name": "Super Senior Citizen (> 80)", value: "super-senior-citizen" }
  ]

  constructor(private _formBuilder: FormBuilder) { }

  basicDetails = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  ngOnInit(): void {
  }

}
