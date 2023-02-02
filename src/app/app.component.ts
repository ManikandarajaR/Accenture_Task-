import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularInterceptor';

  constructor(private test : TestServiceService)
  {

  }

  fetch()
  {
    return this.test.fetch().subscribe(data => console.log(data));
  }

  
  
}
