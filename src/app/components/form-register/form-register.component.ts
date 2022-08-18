import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/app/Register';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
})
export class FormRegisterComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Register>();

  formRegister!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phone: new FormControl(''),
      created_at: new FormControl(''),
    });
  }

  get name() {
    return this.formRegister.get('name')!;
  }

  get email() {
    return this.formRegister.get('email')!;
  }

  get cpf() {
    return this.formRegister.get('cpf')!;
  }

  get phone() {
    return this.formRegister.get('phone')!;
  }

  submit() {
    if (this.formRegister.invalid) {
      return;
    }

    console.log(this.formRegister.value);

    this.onSubmit.emit(this.formRegister.value);
  }
}
