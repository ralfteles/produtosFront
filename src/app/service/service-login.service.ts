import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceLoginService {
  private header = new HttpHeaders();
  
  constructor(public http: HttpClient) {}

  Autenticar(obj) {
    return this.http.post(environment.Autenticacao, obj);
  }
}
