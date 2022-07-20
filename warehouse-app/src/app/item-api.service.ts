import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Item } from './models/Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {
  http :HttpClient;
  //baseUrl :string = environment.apiUrl

  constructor(http :HttpClient) {
    this.http = http;
   }

   findAll() :Observable<any> {
    return this.http.get(environment.apiUrl);
   }
}
