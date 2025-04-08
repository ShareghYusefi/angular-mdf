import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  // ! means that the variable will be initialized later
  reactiveForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  // We can use a FormBuilder instance via dependency injection to create a form group
  // constructor(private formBuilderInstance: FormBuilder) {
  //   // Create a form group with two form controls: name and email
  //   this.reactiveForm = this.formBuilderInstance.group({
  //     email: '',
  //     password: '',
  //   });
  // }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
