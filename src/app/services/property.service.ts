import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:5000/api/properties';

  constructor(private http: HttpClient) { }

  addProperty(property: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, property);
  }

  // getProperties(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  getProperty(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateProperty(id: string, property: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, property);
  }

  deleteProperty(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getProperties(params?: any): Observable<any[]> {
    let queryParams = new HttpParams();
    if (params) {
      for (let key in params) {
        if (params[key]) {
          queryParams = queryParams.append(key, params[key]);
        }
      }
    }
    return this.http.get<any[]>(this.apiUrl, { params: queryParams });
  }


  
}
