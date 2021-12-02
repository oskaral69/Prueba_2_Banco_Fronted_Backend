import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   private apiURL ="http://localhost:3000/api" ;
  constructor(private http: HttpClient) { 
  console.log('Servicio Http:');
  }
  public sendGetRequest(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':  '*'
      })
    };
    return this.http.get(this.apiURL,httpOptions);
  }

}
