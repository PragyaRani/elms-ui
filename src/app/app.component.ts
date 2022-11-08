import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoaderService } from './core/service/course.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient,public loaderService: LoaderService){}
  ngOnInit(): void {
    this.register({
      "name": "pragya",
    "address": "manyata",
    "city": "bangalore",
    "pin": 456987,
    "state": "karnataka",
    "phone": "456321789",
    "email": "pragya.instructor@gmail.com",
    "password": "pragya@123"
  }).subscribe({
      next: (res: any) => {
        
        console.log(res);
      },
      error: (err: any) => {
        if (err && !err.success)
        console.log(err);
      },
    });
    
  }
  public register(payload: any): Observable<any> {
    return this.http.post('https://localhost:44382/api/v1/elms/user/signup', payload).pipe(
      map((loanResponse: any) => {
        return loanResponse;
      })
    );
  }
  title = 'elms-ui';
}
