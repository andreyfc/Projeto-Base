import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ExampleService {

  constructor(private http: Http) { }

  public get() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/').map(
      (res) => res.json()
    );
  }
}
