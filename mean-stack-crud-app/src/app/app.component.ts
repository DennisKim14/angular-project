import { Component, NgZone, OnInit } from '@angular/core';
import { SessionService } from './service/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
      this.ngZone.run(() => this.router.navigateByUrl('/login'));
      location.reload();
    }, 200)
  }
}
