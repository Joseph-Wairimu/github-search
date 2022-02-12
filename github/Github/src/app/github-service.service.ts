import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClientModule } from '@angular/common/http';

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