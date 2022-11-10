
import { Input, Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
// import { MatFileUploadQueue } from 'angular-material-fileupload';
@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.scss']
})
export class AddTemplateComponent implements OnInit {
  // @ViewChild(MatFileUploadQueue) queue: MatFileUploadQueue;
  
  constructor() { }

  ngOnInit(): void {
  }
  public uploadEvent($event: any) {
    console.log(JSON.stringify($event));
    }

}
