import { Component, OnInit } from '@angular/core';
import { SIDENAV_LINKS } from '../../../constants';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  sidenavLinks = SIDENAV_LINKS;
  constructor() {}

  ngOnInit(): void {}
}
