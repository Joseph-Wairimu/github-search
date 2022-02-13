import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  usersDetails:any  ;
   repository:any;
   searchUser:any;

  constructor( private userservice:GithubServiceService) { 
    this.userservice.getUsersDetails().subscribe((usersDetails:any[])=>{
      console.log(usersDetails);
      this.usersDetails=usersDetails;
    })
    // this.userservice.getProfileRepositories().subscribe((repository:any[] | undefined)=>{
    //   this.repository=repository;
    // })
    
  }
  findUser(){
    this.userservice.updateUsersDetails(this.searchUser)
    this.userservice.getUsersDetails().subscribe((usersDetails:any[])=>{
      console.log(usersDetails);
      this.usersDetails=usersDetails;
    })
    // this.userservice.getProfileRepositories().subscribe((repository:any[] | undefined)=>{
    //   this.repository=repository;
    // })
  }


  ngOnInit(): void {
  }

}
