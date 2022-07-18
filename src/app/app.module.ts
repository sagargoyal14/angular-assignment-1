import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningComponentComponent } from './warning-component/warning-component.component';
import { SuccessComponentComponent } from './success-component/warning-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponentComponent,
    SuccessComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
