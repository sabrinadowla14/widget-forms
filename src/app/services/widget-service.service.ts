import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetServiceService {

  private apiUrl = 'https://4tng5yf0o6.execute-api.us-east-1.amazonaws.com/widgets'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getWidget(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteWidget(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
