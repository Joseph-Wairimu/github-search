import { Injectable } from '@angular/core';
import { User } from './user';
import {  HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class  GithubServiceService{

  private username:string;
  private personalToken='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';

  constructor( private http:HttpClient) { 
    console.log("Service working as expected");
    this.username="Joseph-Wairimu";
    
  }


  getUsersDetails() {
    return this.http.get('https://api.github.com/users/' + this.username + "?client_id=" + this.personalToken).pipe(map((res: any) => {
      return res;
    }));
       
}
  getProfileRepositories(){
    return this.http.get('https://api.github.com/users/'+this.username + "/repos?client_id=" + this.personalToken)
  .pipe(map((res: any) => { 
      return res
  }));
  }
  updateUsersDetails(username:string){
    this.username=username;
  }
}

