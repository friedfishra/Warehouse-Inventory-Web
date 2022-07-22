import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Item } from './models/Item';
import { catchError, Observable, throwError } from 'rxjs';

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
    return this.http.get(environment.apiUrl + '/' + id)
   }

   findByName(name :string) :Observable<any> {
    return this.http.get(environment.apiUrl + '/' +name)
   }

   save(item :Item) {
    
    return this.http.post(environment.apiUrl, item).pipe(catchError(this.handleError))
   }

   update(item :Item)  {
    return this.http.put(environment.apiUrl, item)
   }

   delete(id :number) {
    return this.http.delete(environment.apiUrl + '/'+ id)
   }

   private handleError(error :HttpErrorResponse){
    console.log(error);
    return throwError(() => {
      throw new Error();
    });
  }
  
  }
