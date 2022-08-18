import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Specialties } from '../Specialties';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpecialtiesService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}specialties`;

  constructor(private http: HttpClient) {}

  createSpecialties(spec: Specialties): Observable<Specialties> {
    return this.http.post<Specialties>(this.apiUrl, spec);
  }
}
