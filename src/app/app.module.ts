import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
//自定義路由元件

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormlyFieldTabs } from './tabs.type';
import {ListDisplayComponent} from './list-display/list-display.component';
import {FormComponent} from "./form/form.component";
import {LoginComponent} from "./login/login.component";
import {LayoutComponent} from "./layout/layout.component";


@NgModule({
  imports: [
   
    HttpClientModule, // 使用於 http 請求
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule, // Angular Material
    FormlyBootstrapModule,
    AppRoutingModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
        { name: 'tabs', component: FormlyFieldTabs },
      ],
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FormlyFieldTabs,
    ListDisplayComponent,
    FormComponent,
    LoginComponent,
    LayoutComponent
  ],
})
export class AppModule { }


