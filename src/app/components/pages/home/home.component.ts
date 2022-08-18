import { Link } from './../../../Link';
import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/services/link.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private linkService: LinkService, private router: Router) {}

  ngOnInit(): void {}

  async createHandler(link: Link) {
    this.linkService.createLink(link).subscribe(
      () => {
        this.router.navigate(['/links']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
