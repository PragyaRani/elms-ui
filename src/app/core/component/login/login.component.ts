import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
const PASSWORD_VISIBILITY_TIMEOUT: number = 1000; // 1 sec

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passwordVisible: boolean = false;
  private passwordVisibilityTimer: any;
  payload = {
    userName: '',
    password: '',
  };
  message = {
    type: 'INFO',
    message: '',
    show: false,
  };
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;

    // show timer for set time only
    clearTimeout(this.passwordVisibilityTimer);
    this.passwordVisibilityTimer = setTimeout(() => {
      this.passwordVisible = false;
    }, PASSWORD_VISIBILITY_TIMEOUT);
  }

  onAttemptLogin(): void {
    this.clearMessage();
    this.authService.login(this.payload).subscribe({
      next: (res: any) => {
        if (res.success) {
          if(res.data.role == 'Admin') {
            this.router.navigate(['/layout/admin']);
            return;
          }
         
          this.router.navigate(['/layout/user']);
         
        }
      },
      error: (err: any) => {
        if (err && !err.success)
          this.message = {
            show: true,
            message: err.error.message || 'Something went wrong',
            type: 'ERROR',
          };
      },
    });
  }

  private clearMessage(): void {
    this.message = { show: false, message: '', type: 'INFO' };
  }
  onRegister():void {
    this.router.navigate(['/register']);
  }
}
