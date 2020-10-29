import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEncapsulationDefaultComponent } from './view-encapsulation-default/view-encapsulation-default.component';
import { ViewEncapsulationNoneComponent } from './view-encapsulation-none/view-encapsulation-none.component';


const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
