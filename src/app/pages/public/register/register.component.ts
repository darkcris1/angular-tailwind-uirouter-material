import { FormGroup } from '@angular/forms';
import { RegisterForm } from '$common/forms/users.form';
import { FormArray, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  inputAppearance: 'outline' | 'fill' = 'outline';
  Form = new RegisterForm();

  constructor(private fb: FormBuilder) {}

  handleSubmit({ value, valid }: FormGroup) {
    console.log(value);
    this.inputAppearance =
      this.inputAppearance === 'outline' ? 'fill' : 'outline';
  }
  ngOnInit(): void {}
  get phones() {
    return this.Form.form.get('phones') as FormArray;
  }
}
