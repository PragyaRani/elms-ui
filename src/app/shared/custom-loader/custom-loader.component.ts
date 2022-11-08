import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/service/course.service';

@Component({
  selector: 'app-custom-loader',
  templateUrl: './custom-loader.component.html',
  styleUrls: ['./custom-loader.component.scss']
})
export class CustomLoaderComponent implements OnInit {
  loading$ = this.loaderService.loading$;
  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
  }
 
  

}
