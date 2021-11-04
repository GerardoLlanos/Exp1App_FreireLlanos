import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Datos } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

  obtenerDatos()
  {
    return this.http.get<Datos[]>('https://jsonplaceholder.typicode.com/users');
  }
}
