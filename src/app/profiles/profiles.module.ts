import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileService } from './services/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { interceptors } from '../core/interceptors';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateProfileComponent],
  imports: [CommonModule, ProfilesRoutingModule, FormsModule, HttpClientModule],
  providers: [ProfileService, interceptors],
})
export class ProfilesModule {}
