import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { GithubServiceService } from '../github-service.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  userDetails!: User;
  constructor(private responseUserDataService: GithubServiceService) { }

  ngOnInit(): void {
    this.getUserDetails('Joseph-Wairimu');
  }

  getUserDetails(githubUsername:any) {
    this.responseUserDataService.getUserRequest(githubUsername).then(
      (response:any) => {
        this.userDetails = this.responseUserDataService.userReceivedDetails;
      },
      (error:any) => {
        console.log(error);
      }
    ); // end of getUserRequest
  }

}
