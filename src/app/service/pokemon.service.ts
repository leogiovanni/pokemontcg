import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(){
    return this.http.get<any>(url+"cards")
      .catch(this.errorHandler);    
  }
  
  getPokemonDetail(id: String){
    return this.http.get<any>(url+"cards/"+id)
      .catch(this.errorHandler);    
  }

  getPokemonTypes(){
    return this.http.get<any>(url+"types")
      .catch(this.errorHandler);    
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || 'Server Error');
  }
}

