import { Component, OnInit } from '@angular/core';

import { LinkService } from 'src/app/services/link.service';

import { Link } from 'src/app/Link';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent implements OnInit {
  allLinks: Link[] = [];
  // baseApiUrl = environment.baseApiUrl;

  constructor(private linkService: LinkService) {}

  // ngOnInit(): void {
  //   this.linkService.getLinks().subscribe((items) => {
  //     this.allLinks = items.data;
  //   });
  // }

  ngOnInit(): void {
    this.linkService.getLinks().subscribe(
      (items) => (this.allLinks = items),
      (error) => console.error('Error!')
    );
  }
}
