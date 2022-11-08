import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'post-login-layout',
  templateUrl: './post-login-layout.component.html',
  styleUrls: ['./post-login-layout.component.scss']
})
export class PostLoginLayoutComponent implements OnInit {

  public user: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }
}
