import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private readonly url = 'https://mocki.io/v1/a638c068-89c2-4e24-8447-20a03f5e7b77';

  constructor(private readonly httpClient: HttpClient) { }
  getDetails(){
    return this.httpClient.get(this.url);
  }
}
