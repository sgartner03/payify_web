import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    /*
    localhost:8082
    read all items /{username}/all
    write item /{username}/item
    get 1 item /{username}/item/{id}
    */

    return this.http.get<Item[]>("http://localhost:8082/simon/all")
  }
}
