import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AngularEchartsModule } from 'ngx-echarts';

const EXPORTS_MODULES = [   
  CommonModule, ReactiveFormsModule, NgZorroAntdModule, FlexLayoutModule, NgxErrorsModule,
  AngularEchartsModule
];

@NgModule({
  imports: [
    EXPORTS_MODULES
  ],
  exports: [EXPORTS_MODULES],
  declarations: [],
  entryComponents: [],
  providers: []  
})
export class ShareModule { }
