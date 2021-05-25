import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  private localUrl: any = 'assets/music.json';

  constructor(private http: HttpClient) { }
  
  getMusicData() {
    return this.http.get(this.localUrl);
  }
  
}
