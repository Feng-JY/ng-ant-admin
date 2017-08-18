import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';

/**
 * 登入页面
 * 
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  config = { "ballSize": 1, "speed": -0.1, "phaseRefX": 0.6920000000000001, "phaseRefY": 0, "radiusX": 149, "radiusY": 52, "densityX": 8.5, "densityY": 1, "backgroundFrom": "#0b3a44", "backgroundTo": "#108ee9", "degree": 117, "ballColor": "#ffffff" }
  submitted: boolean;
  model: any = { username: '', password: '' };
  form: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private nns: NzNotificationService
  ) { }

  ngOnInit() {
    wavie('login-bg', this.config)
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onClick(event: any) {
    event.stopPropagation();
  }

  // 点击登录
  onSubmit() {
    this.router.navigate(['/']); 
  }

}
