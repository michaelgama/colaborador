import { Component, OnInit } from '@angular/core';
import { Specialties } from 'src/app/Specialties';
import { SpecialtiesService } from 'src/app/services/specialties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css'],
})
export class SpecialtiesComponent implements OnInit {
  constructor(
    private specialtiesService: SpecialtiesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async createHandler(specialties: Specialties) {
    this.specialtiesService.createSpecialties(specialties).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
