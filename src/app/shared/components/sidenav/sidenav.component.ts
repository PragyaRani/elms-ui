import { Component, Input, OnInit } from '@angular/core';
import { STUDENT_SIDENAV_LINKS, INSTRUCTOR_SIDENAV_LINKS } from '../../../constants';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() userType: string = '';
  sidenavLinks = [];
  constructor() { }

  ngOnInit(): void {
    if (this.userType === 'Admin' || this.userType === 'Instructor') {
      this.sidenavLinks = INSTRUCTOR_SIDENAV_LINKS;
      return;
    }
    if (this.userType === 'Student') {
      this.sidenavLinks = STUDENT_SIDENAV_LINKS;
      return;
    }
  }
}
