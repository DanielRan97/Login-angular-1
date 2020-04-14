import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any;
  constructor(private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      class: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }
  

  ngOnInit(): void {
  }

}
