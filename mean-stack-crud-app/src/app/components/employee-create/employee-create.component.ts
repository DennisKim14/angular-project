import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import {ThemePalette} from '@angular/material/core';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent implements OnInit {

  submitted = false;
  employeeForm: FormGroup;
  EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  agreeAll: boolean = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      agree1: ['', []],
      agree2: ['', []],
      agree3: ['', []],
      agreeAll: ['', []]
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.employeeForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.employeeForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else if (!this.employeeForm.getRawValue().agreeAll) {
      alert('약관동의를 해주세요!');
      return false;
    } else {
      return this.apiService.createEmployee(this.employeeForm.value).subscribe({
        complete: () => {
          console.log('Employee successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/employees-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }

  allCheck(ev) {
    if (this.employeeForm.getRawValue().agree1 && this.employeeForm.getRawValue().agree2 && this.employeeForm.getRawValue().agree3) {
      this.employeeForm.patchValue({
        'agree1': false,
        'agree2': false,
        'agree3': false
      })
    } else {
      this.employeeForm.patchValue({
        'agree1': true,
        'agree2': true,
        'agree3': true
      })
    }
  }

  checkState() {
    setTimeout(() => {
      this.employeeForm.getRawValue().agree1 && this.employeeForm.getRawValue().agree2 && this.employeeForm.getRawValue().agree3 ? this.employeeForm.patchValue({agreeAll: true}) : this.employeeForm.patchValue({agreeAll: false});
    }, 100);
  }
}