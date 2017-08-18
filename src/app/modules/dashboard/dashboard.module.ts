import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component'; 
import { ShareModule } from 'app/share/share.module';  

const routes: Routes = [
  { path: '', component: DashboardComponent }, 
];

@NgModule({
  imports: [
    ShareModule, 
    RouterModule.forChild(routes),
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
