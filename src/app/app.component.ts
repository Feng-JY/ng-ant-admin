import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nz-root>
      <router-outlet></router-outlet>
    </nz-root>
  `,
  styleUrls: ['./app.component.less'] 
})
export class AppComponent {
  title = 'app';
}
