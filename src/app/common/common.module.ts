import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { routing } from './common.routing';

@NgModule({
  imports: [
    ShareModule,
    routing
  ],
  declarations: [LoginComponent, MainComponent]
})
export class CommonModule { }
