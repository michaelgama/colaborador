import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Specialties } from 'src/app/Specialties';

@Component({
  selector: 'app-form-specialties',
  templateUrl: './form-specialties.component.html',
  styleUrls: ['./form-specialties.component.css'],
})
export class FormSpecialtiesComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Specialties>();

  formSpecialties!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formSpecialties = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.formSpecialties.get('name')!;
  }

  submit() {
    if (this.formSpecialties.invalid) {
      return;
    }

    console.log(this.formSpecialties.value);

    this.onSubmit.emit(this.formSpecialties.value);
  }
}
