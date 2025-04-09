import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { avoidWord } from '../customValidation';

@Component({
  selector: 'reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;

  // We can use a FormBuilder instance via dependency injection to create a form group
  constructor(private formBuilderInstance: FormBuilder) {
    // Create a form group with two form controls: name and email
    this.reactiveForm = this.formBuilderInstance.group({
      // We can use Validators to specify validation rules for each form control
      email: [
        '',
        [Validators.email, Validators.required, Validators.minLength(5)],
      ],
      password: ['', [Validators.required, Validators.minLength(5), avoidWord]],
      subscribe: [false],
    });
  }

  // We can use getters to access the form controls in the template
  get email() {
    return this.reactiveForm.get('email');
  }

  get password() {
    return this.reactiveForm.get('password');
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
