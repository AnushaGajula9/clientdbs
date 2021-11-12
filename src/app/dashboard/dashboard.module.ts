import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileService } from '../profiles/services/profile.service';
import { interceptors } from '../core/interceptors';
import { HttpClientModule } from '@angular/common/http';
import { DashboardActionComponent } from './components/dashboard-action/dashboard-action.component';
import { DisplayEduComponent } from '../edu/components/display-edu/display-edu.component';
import { ExpModule } from '../exp/exp.module';
import { EduModule } from '../edu/edu.module';

@NgModule({
  declarations: [DashboardComponent, DashboardActionComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ExpModule,
    EduModule,
  ],

  providers: [ProfileService, interceptors],
})
export class DashboardModule {}
