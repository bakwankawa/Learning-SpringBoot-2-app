import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // add this so application can using httpclient protocol in chrome
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
