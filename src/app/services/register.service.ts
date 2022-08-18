import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Register } from '../Register';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}register`;

  constructor(private http: HttpClient) {}

  createRegister(register: Register): Observable<Register> {
    return this.http.post<Register>(this.apiUrl, register);
  }
}
