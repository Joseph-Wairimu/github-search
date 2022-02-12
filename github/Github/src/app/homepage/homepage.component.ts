import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
   usersDetails:any  ;
   repository:any;
   searchUser:any;
  constructor(private githubservice: GithubServiceService) { 
  this.githubservice.getUsersDetails().subscribe((usersDetails:any[])=>{
      console.log(usersDetails);
      this.usersDetails=usersDetails;
    })
    this.githubservice.getProfileRepositories().subscribe((repository:any[] | undefined)=>{
      this.repository=repository;
    })
    
  }




findUser(){
    this.githubservice.updateUsersDetails(this.searchUser)
    this.githubservice.getUsersDetails().subscribe((usersDetails:any[])=>{
      console.log(usersDetails);
      this.usersDetails=usersDetails;
    })
    this.githubservice.getProfileRepositories().subscribe((repository:any[] | undefined)=>{
      this.repository=repository;
    })
  }

  ngOnInit(): void {
    
  }

 

}
