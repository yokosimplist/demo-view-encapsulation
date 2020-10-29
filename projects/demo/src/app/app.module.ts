import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewEncapsulationDefaultComponent } from './view-encapsulation-default/view-encapsulation-default.component';
import { ViewEncapsulationNoneComponent } from './view-encapsulation-none/view-encapsulation-none.component';

import { ChildDefaultComponent } from './child-default/child-default.component';
import { ChildNoneComponent } from './child-none/child-none.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewEncapsulationDefaultComponent,
    ViewEncapsulationNoneComponent,
    ChildDefaultComponent,
    ChildNoneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
