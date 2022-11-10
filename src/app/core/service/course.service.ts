import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})

export class CourseService {
  
  private loading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient){}

  public getCourseDetails():Observable<any>{

    //https://localhost:44382/api/v1/courseware/catalogue
    return this.http.get('https://localhost:44382/api/v1/courseware/catalogue').pipe(
      map((courseResponse: any) => {
        return courseResponse;
      })
    );
  }
  getCoursebyId(id:number) : Observable<any>{
    //'https://localhost:44382/api/v1/courseware/catalogue/' +id
    return this.http.get(`https://localhost:44382/api/v1/courseware/catalogue/${id}`).pipe(
      map((courseResponse: any) => {
        return courseResponse;
      })
    );
  }

  modifyCourse(payload: any) : Observable<any>{
    return this.http.put(`https://localhost:44382/api/v1/courseware/course/${payload.id}`, payload).pipe(
      map((courseResponse: any) => {
        return courseResponse;
      })
    );
  }
  public addCourse(payload: any): Observable<any> {
    return this.http.post('https://localhost:44382/api/v1/courseware/admin', [payload]).pipe(
      map((courseResponse: any) => {
        return courseResponse;
      })
    );
  }
  public getStudentEnrollCourse(studentId:number): Observable<any> {
    return this.http.get(`https://localhost:44382/api/v1/enrolment/student/${studentId}`).pipe(
      map((courseResponse: any) => {
        return courseResponse;
      })
    );
  }
  //https://localhost:44382/api/v1/enrolment/courseware/4
  public studentEnrollCourse(payload:any): Observable<any> {
    return this.http.put(`https://localhost:44382/api/v1/enrolment/courseware/${payload.enrollCourseId}`, payload).pipe(
      map((courseResponse: any) => {
        return courseResponse;
      })
    );
  }
  public GetNotification(): Observable<any> {
    return this.http.get(`https://localhost:44382/api/v1/elms/notification`).pipe(
      map((courseResponse: any) => {
        return courseResponse;
      })
    );
  }



  
}
