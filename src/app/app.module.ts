import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestServiceService } from './test-service.service';
import {HttpInterceptProviders} from "./http-interceptor/index";
import { SearchBoxComponent } from './component/search-box/search-box.component';
import { SearchFilterPipe } from './search-filter.pipe'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';



 
@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [TestServiceService,HttpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
