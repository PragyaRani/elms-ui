import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-login-layout',
  templateUrl: './pre-login-layout.component.html',
  styleUrls: ['./pre-login-layout.component.scss']
})
export class PreLoginLayoutComponent implements OnInit {
 isRegister = false;
  constructor() { }

  ngOnInit(): void {
  }
  onRegister():void {
    this.isRegister = true;
  }

}
