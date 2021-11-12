import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpRoutingModule } from './exp-routing.module';
import { DisplayExpComponent } from './components/display-exp/display-exp.component';
import { AddExpComponent } from './components/add-exp/add-exp.component';
import { ProfileService } from '../profiles/services/profile.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { interceptors } from '../core/interceptors';

@NgModule({
  declarations: [DisplayExpComponent, AddExpComponent],
  imports: [CommonModule, FormsModule, ExpRoutingModule, HttpClientModule],
  exports: [DisplayExpComponent],
  providers: [ProfileService, interceptors],
})
export class ExpModule {}
