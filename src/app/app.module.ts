import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppTitleGenerator } from './app.generator';

@NgModule({
  declarations: [
    AppTitleGenerator
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppTitleGenerator]
})
export class AppModule { }
