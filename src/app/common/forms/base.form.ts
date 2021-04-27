import { FormGroup, FormBuilder, AbstractControlOptions } from '@angular/forms';
import * as Joi from 'joi';

export class Form {
  #form: FormGroup;
  builder: FormBuilder;
  constructor(fields: Object, schema: any) {
    this.builder = new FormBuilder();

    this.#form = this.builder.group(fields, {
      validators: this.validator(schema),
    } as AbstractControlOptions);
  }

  validator(schema: Joi.ObjectSchema) {
    return (group: FormGroup) => {
      // This is where the validation on the values of
      // the form group is run.
      const result = schema.validate(group.value);
      if (!result.error) return null;

      const errorObj = result.error.details.reduce((acc, current) => {
        const key = current.path.join('.');
        acc[key] = current.message;
        return acc;
      }, {} as { [key: string]: any });

      // Set error value on each control
      for (const key in errorObj) {
        const control = group.get(key);
        if (control) {
          control.setErrors({ [key]: errorObj[key] });
        }
      }

      // Return the error object so that we can access
      // the form’s errors via `form.errors`.
      return errorObj;
    };
  }

  // This will return an error message
  getError(formControlName: string) {
    if (this.#form.get(formControlName)?.touched && this.#form.errors) {
      return this.#form.errors[formControlName];
    }
    return;
  }

  get form() {
    return this.#form;
  }

  get isValid(): boolean {
    return this.#form.valid;
  }
}
