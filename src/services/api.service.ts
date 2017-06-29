import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http:Http) { }

  doLogin(email:string, password:string):Promise<any> {
    console.log('API Service', email, password);
    return Promise.resolve({email});
  }

  getTrailers() {
    return this.http.get('http://localhost:8080/trailers');
  }

}
