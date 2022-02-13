import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { ColorHoverDirective } from '../color-hover.directive';
@Component({
  selector: 'app-search-repository',
  templateUrl: './search-repository.component.html',
  styleUrls: ['./search-repository.component.css']
})
export class SearchRepositoryComponent implements OnInit {

  usersDetails:any  ;
   repository:any;
   searchUser:any;

  constructor( private userservice:GithubServiceService) { 
    this.userservice.getUsersDetails().subscribe((usersDetails:any[])=>{
      console.log(usersDetails);
      this.usersDetails=usersDetails;
    })
    this.userservice.getProfileRepositories().subscribe((repository:any[] | undefined)=>{
      this.repository=repository;
    })
    
  }
  findUser(){
    this.userservice.updateUsersDetails(this.searchUser)
    this.userservice.getUsersDetails().subscribe((usersDetails:any[])=>{
      console.log(usersDetails);
      this.usersDetails=usersDetails;
    })
    this.userservice.getProfileRepositories().subscribe((repository:any[] | undefined)=>{
      this.repository=repository;
    })
  }


  ngOnInit(): void {
  }

}
