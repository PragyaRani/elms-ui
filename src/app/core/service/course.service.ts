import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})

export class CourseService {
  
  private loading = new BehaviorSubject<boolean>(false);
  private EnrollCourseSubject: BehaviorSubject<any>;
  public enrollCourse: Observable<any>;

  constructor(private http: HttpClient){
    this.EnrollCourseSubject = new BehaviorSubject<any>(
      JSON.parse('{}') // null if the localStorage key not rexist
    );
   // this.enrollCourse = this.EnrollCourseSubject.asObservable();
  }

  public getCourseDetails():Observable<any>{

   
    return this.http.get('https://localhost:44382/api/v1/courseware/catalogue').pipe(
      map((courseResponse: any) => {
        return courseResponse;
      })
    );
  }
  getCoursebyId(id:number) : Observable<any>{
   
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
        this.EnrollCourseSubject.next(courseResponse);
        return courseResponse;
      })
    );
  }
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

 
  public GetEnrollStudentWithCourse(): Observable<any> {
    return this.http.get(` https://localhost:44382/api/v1/elms/enrollStudents`).pipe(
      map((courseResponse: any) => {
        return courseResponse;
      })
    );
    
  }
  public get enrollCourseValue(): any {
    return this.EnrollCourseSubject?.value;
  }



  
}
