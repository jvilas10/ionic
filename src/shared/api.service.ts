import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  get(method, params) {
    var options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET',
            'Authorization': 'Basic YWJzYXJmOmhzbg==',
        }),
        params: params
    }

    return this.http.get('http://localhost/basicapi/index.php', options);
}
}
