import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  profile: any = {};

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {}
  createProfileSubmit() {
    this.profileService.createProfile(this.profile).subscribe(
      (res) => {
        console.log(JSON.stringify(this.profile));
        this.profileService.createProfile(this.profile);
        this.router.navigate(['/dashboard']);
      },
      (err) => {}
    );
  }
}
