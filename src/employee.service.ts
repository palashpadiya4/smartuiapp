import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getctcdetails() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://192.168.0.119:5000';

  getEmployeelist(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/employee`)

  }
  getfeedbackifnolist(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/feedbackifno`)

  }

  getcandidateexplist(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/canditateexp`)

  }
  getctcdetailslist(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/ctcdetailes`)

  }
  getctchistorylist(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/ctchistory`)

  }


  // getEmployeelist() {
  //   return this.httpClient.get(this.baseUrl);
  // }

}
