import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private REST_API_SERVER = 'http://localhost:17135/datnek-api-test/v1'

  constructor(private httpClient: HttpClient) { }

  public getLanguages() {
    return this.httpClient.get(this.REST_API_SERVER + '/languages')
  }

  public postLanguage(data: any) {
    return this.httpClient.post(this.REST_API_SERVER + '/languages', data)
  }

}
