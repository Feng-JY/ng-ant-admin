import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd, NavigationCancel, NavigationStart, NavigationError } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';

@Component({
	selector: 'pages-main',
	styleUrls: ['./main.component.less'],
	templateUrl: './main.component.html',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.Default   
})

export class MainComponent implements OnInit {
	isCollapsed: boolean = false;  
	constructor( 
		// private loadingBar: LfLoadingBarService,
		private nms: NzModalService,
		private router: Router) { } 

	ngOnInit() {
		// this.router.events.subscribe(event => {
		// 	if (event instanceof NavigationStart) {
		// 		this.loadingBar.start();
		// 	} else if (event instanceof NavigationCancel || event instanceof NavigationEnd || event instanceof NavigationError) {
		// 		this.loadingBar.done();
		// 	}
		// }, (error: any) => { this.loadingBar.done(); });
	}

	/**
 * 注销
 */
	onLogout() {
		this.router.navigateByUrl('/login');
	}
}