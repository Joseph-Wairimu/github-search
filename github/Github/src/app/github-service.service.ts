import { Injectable } from '@angular/core';
import { User } from './user';
import {  HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  userDetails: User;

  constructor(private http: HttpClient) {
    this.userDetails = new User(
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      0,
      0,
      new Date(),
      ''
    );
}
}