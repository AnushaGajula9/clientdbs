import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EduRoutingModule } from './edu-routing.module';
import { DisplayEduComponent } from './components/display-edu/display-edu.component';
import { AddEduComponent } from './components/add-edu/add-edu.component';

@NgModule({
  declarations: [DisplayEduComponent, AddEduComponent],
  imports: [CommonModule, EduRoutingModule],
  exports: [DisplayEduComponent],
})
export class EduModule {}
