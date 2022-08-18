import { Register } from './../../../Register';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async createHandler(register: Register) {
    this.registerService.createRegister(register).subscribe(
      () => {
        this.router.navigate(['/links']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
