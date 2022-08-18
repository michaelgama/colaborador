import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Link } from 'src/app/Link';

@Component({
  selector: 'app-form-link',
  templateUrl: './form-link.component.html',
  styleUrls: ['./form-link.component.css'],
})
export class FormLinkComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Link>();

  formLink!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formLink = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      link: new FormControl(''),
      created_at: new FormControl(''),
    });
  }

  get name() {
    return this.formLink.get('name')!;
  }

  submit() {
    if (this.formLink.invalid) {
      return;
    }

    console.log(this.formLink.value);

    this.onSubmit.emit(this.formLink.value);
  }
}
