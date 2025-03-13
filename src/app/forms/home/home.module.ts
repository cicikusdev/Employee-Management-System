import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {TableModule} from 'primeng/table';
import {HomeComponent} from './home.component';
import {Button, ButtonDirective} from 'primeng/button';
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {ChipsModule} from 'primeng/chips';
import {InputTextareaModule} from 'primeng/inputtextarea';



@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        TableModule,
        Button,
        ButtonDirective,
        FormsModule,
        DialogModule,
        ChipsModule,
        InputTextareaModule,
        NgOptimizedImage
    ]
})
export class HomeModule { }
