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

   findById(id :number) :Observable<any> {
    return this.http.get(environment.apiUrl + id)
   }

   findByName(name :string) :Observable<any> {
    return this.http.get(environment.apiUrl + name)
   }

   save(item :Item) :Observable<any> {
    return this.http.post(environment.apiUrl, item)
   }

   update(item :Item) :Observable<any> {
    return this.http.put(environment.apiUrl + item.itemId, item)
   }

   delete(id :number) :Observable<any> {
    return this.http.delete(environment.apiUrl + id)
   }
  
  }
