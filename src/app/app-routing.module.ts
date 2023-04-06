import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import {ListDisplayComponent} from './list-display/list-display.component';
import {FormComponent} from "./form/form.component";
import {LoginComponent} from "./login/login.component";
import {LayoutComponent} from "./layout/layout.component";
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'listdisplay',
        component: ListDisplayComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
    ]
  },
  
  {
    path: "login",
    component: LoginComponent,
    loadChildren: './login/login.module#LoginModule'
  },

  {
    path: "",
    component: ListDisplayComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "**",  
    pathMatch: 'full',
    redirectTo: 'login',
  }
  
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {enableTracing: true,
        useHash: true,
        preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }