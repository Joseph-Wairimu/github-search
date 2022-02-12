import { Injectable } from '@angular/core';
import { User } from './user';
import {  HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  userReceivedDetails: User;

  constructor(private http: HttpClient) {
    this.userReceivedDetails = new User(
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
getUserRequest(githubUsername) {
  interface ApiUserResponse {
    name: string;
    login: string;
    avatar_url: string;
    blog: string;
    public_repos: number;
    html_url: string;
    location: string;
    bio: string;
    twitter_username: string;
    _repos: number;
    followers: number;
    following: number;
    created_at: Date;
    company?: string;
  }





}