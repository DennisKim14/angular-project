import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/service/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'mean-stack-crud-app';
  isLogin: boolean = false;

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.sessionService.isLogin$.subscribe(bool => this.isLogin = bool);
  }

  logout(): void {
    this.sessionService.removeItem();
    setTimeout(() => {
      this.ngZone.run(() => this.router.navigateByUrl('/account/login'));
    }, 200)
  }
}
