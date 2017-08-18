import { NgModule } from '@angular/core';
import { ShareModule } from 'app/share/share.module';  
import { Routes, RouterModule } from '@angular/router';
import { UserManagerComponent } from './user-manager/user-manager.component';

const routes: Routes = [
  { path: '', component: UserManagerComponent },  
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes),
  ],
  declarations: [UserManagerComponent]
})
export class UserModule { }
