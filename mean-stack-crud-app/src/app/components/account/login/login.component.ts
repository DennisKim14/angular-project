import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { SessionService } from 'src/app/core/service/session.service';
import { RESPONSE_CODE } from 'src/app/core/service/response.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  submitted = false;
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
    private sessionService: SessionService
  ) {
    this.loginForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    })
  }

  get myForm() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.loginForm.valid) {
      return false;
    } else {
      return this.apiService.login(this.loginForm.value).subscribe(res => {
        if (res.code === RESPONSE_CODE.SUCCESS) {
          alert('로그인 성공');
          this.sessionService.setItem(this.loginForm.getRawValue().id);
          this.ngZone.run(() => this.router.navigateByUrl('/employee/employees-list'));
        } else if (res.code === 0) {
          alert(res.msg);
        }
      }
      // {
      //   complete: () => {
      //       localStorage.setItem('id', this.loginForm.getRawValue().id);
      //       this.ngZone.run(() => this.router.navigateByUrl('/employees-list'));
      //   },
      //   error: (e) => {
      //     alert(e);
      //   },
      // }
      );
    }
  }

}
