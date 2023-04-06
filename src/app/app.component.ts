import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //不同表單的url
  url: string = 'http://localhost:8080/';
  url3: string = 'http://localhost:8080/form3';
  url4: string = 'http://localhost:8080/inspg';
  url5: string = 'http://localhost:8080/list';

  constructor(private http: HttpClient) {}

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
  submittedFormData: any;
  appdoc_list_id: string[]; //儲存appdoc_list資料表中的appdoc_id 辨識表單填寫的進度
  //name = new FormControl('');
  //newform=new FormGroup({})
  list_code: string[] = [];

  ngOnInit() {}
  test_get_jsonform() {
    const value_obj = {
      ProjTitle: '1111121-568',
      ProjVer: '12.8',
      ProjDate: '2022-11-21',
      Sponsor: 'abc',
      ContactRole: 'cde',
      ContactPos: 'def',
    };

    this.form.patchValue({
      ProjTitle: '1111121-568',
      ProjVer: '12.8',
      ProjDate: '2022-11-21',
      Sponsor: 'abc',
      ContactRole: 'cde',
      ContactPos: 'def',
    });
  }

  //模擬當使用者登入時，會顯示使用者填寫過的表單
  showlist() {
    var n = 0;
    var html_str = '<button (click)="test_get_jsonform()" >注入</button>';
    document.getElementById('table_list').innerHTML +=
      '<tr><th>序號</th><th>項目</th></tr>';
    this.http
      .get(this.url5, { observe: 'response', responseType: 'text' })
      .subscribe((res) => {
        console.log(res.body);
        const list_obj = JSON.parse(res.body); //轉換成json物件，陣列型態

        for (var i = 0; i < list_obj.length; i++) {
          console.log(JSON.stringify(list_obj[i].doc_name)); //陣列+dict

          document.getElementById('table_list').innerHTML +=
            '<tr><td>' +
            (i + 1) +
            '</td><td>' +
            list_obj[i].doc_name +
            '</td></tr>';
          //document.getElementById("table_list").innerHTML+=html_str;
          //this.AddButton(i);
        }
        //顯示空單按鈕
        document.getElementById('edit').style.display = 'block';
        document.getElementById('123').style.display = 'block';
        document.getElementById('456').style.display = 'block';
        document.getElementById('789').style.display = 'block';
      });
  }
  //動態產生按鈕
  AddButton(id_n: number) {
    var list_code;
    var bt = document.createElement('input'); //createElement生成button对象
    bt.type = 'button';
    bt.value = '編輯';
    bt.id = 'submit' + id_n;
    bt.onclick = function () {
      alert(bt.id);
    };
    document.getElementById('list').appendChild(bt); //添加到页面 */
  }

  getjson() {
    this.http
      .get<FormlyFieldConfig[]>(this.url, { observe: 'response' })
      .subscribe((res) => {
        //let response: HttpResponse<any> = res;
        //alert(typeof(res.body));
        console.log(res.body);
        this.fields = res.body;
      });
  }

  getjson2() {
    this.http
      .get<FormlyFieldConfig[]>(this.url3, { observe: 'response' })
      .subscribe((res) => {
        //let response: HttpResponse<any> = res;
        alert(typeof res.body);
        console.log(res.body);
        this.fields = res.body;
      });
  }
  store() {
    this.submittedFormData = JSON.stringify(this.model);
    alert(JSON.stringify(this.model));

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers,
    };
    this.http
      .post<any>(this.url4, this.submittedFormData, options)
      .subscribe((res) => {});
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
