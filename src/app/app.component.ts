import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ErrorPage With HttpInterceptor';
  errorText: string | undefined;
  errBlock: Boolean | undefined;

  constructor(private service:TestService){

  }
  
  ngOnInit() {
    this.service.getData().subscribe((data)=>{
      console.log('data fetched',data);
    },
    error=>{
      this.errBlock = true;
      this.errorText = error.message;
    }
  )};
}
