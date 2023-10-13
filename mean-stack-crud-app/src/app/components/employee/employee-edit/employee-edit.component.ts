import { Employee } from './../../../core/model/employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../core/service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
})
export class EmployeeEditComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  employeeData: Employee[];
  EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEmployee(id) {
    this.apiService.getEmployee(id).subscribe((data) => {
      this.editForm.setValue({
        id: data['_id'],
        name: data['name'],
        pass: '',
        confirmPass: '',
        email: data['email'],
        designation: data['designation'],
        phoneNumber: data['phoneNumber'],
      });
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      pass: [''],
      confirmPass: [''],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      const _  = this.editForm.getRawValue();
      const data = {
        id: _.id,
        name: _.name,
        pass: _.pass,
        email: _.email,
        designation: _.designation,
        phoneNumber: _.phoneNumber
      }

      if (window.confirm('수정하시겠습니까?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
         this.apiService.updateEmployee(id, data).subscribe({
          complete: () => {
            console.log(1)
            this.router.navigateByUrl('/employees-list');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}
