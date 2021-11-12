import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpComponent } from './components/add-exp/add-exp.component';

const routes: Routes = [
  {
    path: 'add-experience',
    component: AddExpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpRoutingModule {}
