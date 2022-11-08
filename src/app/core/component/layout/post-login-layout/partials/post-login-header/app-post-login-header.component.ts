import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-post-login-header',
  templateUrl: './app-post-login-header.component.html',
  styleUrls: ['./app-post-login-header.component.scss']
})
export class PostLoginHeaderComponent implements OnInit {
  @Input() userType: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
