import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  post(method, params) {
    const headers = this.headers;
    return this.http.post(environment.API_BASE_URL + method, params, { headers });
  };

  get(method, params) {
// tslint:disable-next-line: prefer-const
   /* var options = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin' : '*',
            'Content-Type' : 'application/json',
            authorization : 'Basic bW9iaWxlYXBpdXNlcjpwYXNzd29yZDEh',
          }),
    } */
// const httpOptions = { headers: new HttpHeaders({ Authorization: 'Basic YWJzYXI6aHNu' }) }
// tslint:disable-next-line: variable-name
    let userName = 'absar';
    let password = 'hsn';
    let authorizationData = 'Basic ' + btoa(userName + ':' + password);

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', authorizationData);
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    headers = headers.append('Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type');
    headers = headers.append('Access-Control-Expose-Headers', 'Content-Length,Content-Range');

   /* const headerOptions = new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Content-Type' : 'application/json',
      'Authorization': authorizationData,
   })
   */
    return this.http.get('http://localhost/basicapi/index.php', { headers });

};
}
