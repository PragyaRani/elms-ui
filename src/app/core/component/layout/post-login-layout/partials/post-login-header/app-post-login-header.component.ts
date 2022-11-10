import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { CourseService } from 'src/app/core/service/course.service';

@Component({
  selector: 'app-post-login-header',
  templateUrl: './app-post-login-header.component.html',
  styleUrls: ['./app-post-login-header.component.scss']
})
export class PostLoginHeaderComponent implements OnInit {
  @Input() userType: string = '';
  simpleContent = 'S';
  overlap = true;
  disabled = true;
  notifications:any = [];
  constructor(private router: Router, private authService: AuthService, private courseService: CourseService) {}

  ngOnInit(): void {
  this.courseService.GetNotification().subscribe({
  next:(res:any) => {
    this.notifications = res;
  }, error:(err:any) =>{

  }
})
  }
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  openNotification(){}

}
