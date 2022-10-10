import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelCountry } from '../model-country';
import { ModelGender } from '../model-gender';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;
  countries: ModelCountry[] = [
    { text: 'Turkey', value: 1 },
    { text: 'Germany', value: 2 },
    { text: 'Italy', value: 3 },
    { text: 'France', value: 3 },
    { text: 'USA', value: 4 },
  ];
  genders: ModelGender[] = [
    { text: 'Man', value: 1 },
    { text: 'Woman', value: 2 },
  ];
  constructor(formBuilder: FormBuilder) {
    this.reactiveForm = formBuilder.group({
      userName: formBuilder.control('', Validators.required),
      password: formBuilder.control('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      iAgree: formBuilder.control(false, Validators.required),
      country: formBuilder.control('', Validators.required),
      gender: 0
    });
  }

  ngOnInit(): void {}

  apply() {
    console.log(this.reactiveForm.value);
  }

  isInValid(formControlName: string): boolean | undefined {
    return (
      this.reactiveForm.get(formControlName)?.invalid &&
      this.reactiveForm.get(formControlName)?.touched
    );
  }

  isValid(formControlName: string): boolean | undefined {
    return (
      this.reactiveForm.get(formControlName)?.valid &&
      this.reactiveForm.get(formControlName)?.touched
    );
  }

}
