import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profiles/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userName: string;
  profileStatus: string;
  profileDetail: any = {};

  constructor(private ProfileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.userName = JSON.parse(localStorage.getItem('userDetails') || '').name;
    this.ProfileService.getprofile().subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.profileDetail = res;
      },
      (err: any) => {
        this.profileStatus = err.noprofile;
      }
    );
  }
  createProfileButtonClick() {
    this.router.navigate(['/profiles/create-profile']);
  }
  deleteExep(expId: string) {
    this.ProfileService.deleteExep(expId).subscribe((res) => {
      //this.router.navigate(['/dashboard']);
      this.profileDetail = res;
    });
  }
}
