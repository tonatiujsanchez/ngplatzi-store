import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoRoutingModule } from './demo-routing.module';

import { DemoComponent } from './components/demo/demo.component';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
