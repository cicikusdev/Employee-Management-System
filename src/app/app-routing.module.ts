import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './forms/home/home.module';
import {AppComponent} from './app.component';



@NgModule({
  imports: [RouterModule.forRoot([
    {path: "", component: AppComponent, loadChildren: () => import('./forms/home/home.module').then((m) => m.HomeModule)}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
