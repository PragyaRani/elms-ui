import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  message = {
    type: 'INFO',
    message: '',
    show: false,
  };
  constructor(private fb: FormBuilder,private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  private createRegisterForm(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pin: [0, [Validators.required]],
      state: ['', [Validators.required]],
      phone: ['', [Validators.required], Validators.min(10), Validators.max(6)],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
      // confirmpassword: ['', [Validators.required]]
    });
  }
  onSubmit():void {
    this.authService.register(this.registerForm.value).subscribe({
      next: (res: any) => {
        if (res && !res.success) {
            this.message = {
              show: true,
              message: res.message || 'Something went wrong',
              type: 'ERROR',
            };
            return;
          }
        this.onCancel();
      },
      error: (err: any) => {
        console.log(err);
        if (err && !err.success) {
          this.message = {
            show: true,
            message: err?.error.message || 'Something went wrong',
            type: 'ERROR',
          };
          return;
        }
       
      },
    });

  }
  onCancel(): void {
    this.router.navigate(['/login']);
  }
  TermValidators(control: AbstractControl) {
    if (control.value > 0 && control.value <= 30) return { termRange: true };
    return false;
  }
  get name(): FormControl | null {
    return this.registerForm.get('name') as FormControl;
  }
  get address(): FormControl | null {
    return this.registerForm.get('address') as FormControl;
  }
  get city(): FormControl | null {
    return this.registerForm.get('city') as FormControl;
  }
  get pin(): FormControl | null {
    return this.registerForm.get('pin') as FormControl;
  }
  get state(): FormControl | null {
    return this.registerForm.get('state') as FormControl;
  }
  get phone(): FormControl | null {
    return this.registerForm.get('phone') as FormControl;
  }
  get email(): FormControl | null {
    return this.registerForm.get('email') as FormControl;
  }
  get password(): FormControl | null {
    return this.registerForm.get('password') as FormControl;
  }
  get confirmpassword(): FormControl | null {
    return this.registerForm.get('confirmpassword') as FormControl;
  }


}
