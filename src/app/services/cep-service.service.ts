import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adress } from '../models/adress';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  url = "https://viacep.com.br/ws/"

  constructor(private http: HttpClient) { }


  getCep(cep: string): Observable<Adress>{
    return this.http.get<Adress>(this.url + `${cep}` + '/json');
  }
}
