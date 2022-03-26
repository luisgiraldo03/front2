import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class AllService {
 
  apiUrl = "http://18.116.219.17:5200/getall"
 
  constructor(public http: HttpClient) { }
 
 
 
  async getAll(data: any): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      this.http.post<any[]>(this.apiUrl, data).subscribe(resolve, reject);
    });
  }
 
 
}
