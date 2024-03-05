import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetClientService {
   url= "http://localhost:3000/client";
  constructor(private httpClient: HttpClient) { }
  getAllData():Observable<any>{
    return this.httpClient.get(`${this.url}`); 
  }

  getClient(id: number): Observable<void> {
    return this.httpClient.get<void>(`${this.url}/${id}`);
  }

  create(client: any): Observable<any> {
    return this.httpClient.post(this.url, client);
  }

  update(client: any): Observable<any> {
    return this.httpClient.put(`${this.url}/${client.id}`, client);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }



}


