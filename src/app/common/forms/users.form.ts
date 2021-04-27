import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as Joi from 'joi';
import { Form } from './base.form';

const fb = new FormBuilder();
export class RegisterForm extends Form {
  constructor(data?: any) {
    const fb = new FormBuilder();

    const fields = {
      username: '',
      password: '',
      confirm_password: '',
      email: '',
      phones: fb.array([fb.control('09')]),
      experience: fb.array([]),
    };
    const schema = Joi.object({
      username: Joi.string().required().alphanum().trim().min(2).max(10),
      password: Joi.string().required().trim().min(2).max(10),
      confirm_password: Joi.ref('password'),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      phones: Joi.array().items(Joi.string().min(11).max(13)).messages({
        'string.min':
          'This field needs to contain at least {#limit} characters',
        'string.max': 'This field can contain no more than {#limit} characters',
      }),
      experience: Joi.array().items(
        Joi.object({
          name: Joi.string().label('Job Name'),
          years: Joi.string().label('Years'),
        })
      ),
    });
    super(fields, schema);
  }
  get experience() {
    return this.form.get('experience') as FormArray;
  }

  addExperience() {
    this.experience.push(this.newExperience());
  }
  newExperience() {
    return this.builder.group({
      name: '',
      years: '',
    });
  }
  removeExperience(index: number) {
    this.experience.removeAt(index);
  }

  get phones() {
    return this.form.get('phones') as FormArray;
  }
  addPhones() {
    this.phones.push(this.builder.control('09'));
  }
  removePhones(index: number) {
    this.phones.removeAt(index);
  }
}
