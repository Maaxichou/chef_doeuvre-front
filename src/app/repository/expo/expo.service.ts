import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expo } from "../../entity/expo";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpoService {

  private url='http://localhost:8000/api/expo';
  
  constructor(
    private http:HttpClient
  ) { }

  findAll():Observable<Expo[]> {
    return this.http.get<Expo[]>(this.url);
  }

  add(expo) : Observable<Expo> {
    return this.http.post<Expo>(this.url, expo);
  }
}
