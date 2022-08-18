import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Link } from '../Link';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}links`;

  constructor(private http: HttpClient) {}

  createLink(link: Link): Observable<Link> {
    return this.http.post<Link>(this.apiUrl, link);
  }

  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(this.apiUrl);
  }
}
