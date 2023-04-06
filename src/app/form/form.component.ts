import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient,HttpHeaders,HttpResponse,HttpParams  } from '@angular/common/http';
import { OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 //不同表單的url
 url: string = "http://localhost:8080/";
 url3: string = "http://localhost:8080/form3";
 url4:string="http://localhost:8080/inspg";
 url_status:string="http://localhost:8080/status";
 url_test_patch:string="http://localhost:8080/test";
  constructor(private http: HttpClient,private route: ActivatedRoute) { }
  
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
 
  submittedFormData:any;
  
  
  public disabled = true;

  ngOnInit() {
    this.getjson()
    //接收從list-dusplay中收到的appdoc_id，並向後端app_doc.statue是否不為0
    const appdoc_id=this.route.snapshot.params['patchid'];
    console.log("app_doc_id: "+this.route.snapshot.params['patchid']);
    let queryParams = new HttpParams().append("patchid",appdoc_id);
   this.http.get(this. url_test_patch, {observe: 'response', responseType: 'text',params:queryParams})
      .subscribe((res) => {
        const status_obj=JSON.parse(res.body)
        
        console.log("回傳的status: "+status_obj[0].status)
        if(status_obj[0].status=='0'){
          this.disabled = false;
        
        }

      });

   

   
    
   
    


    
  }
  test(){}
  //待修改，資料寫死
  test_get_jsonform(){
    
   const value_obj={
    "ProjTitle":"1111121-568",
      "ProjVer":"12.8",
      "ProjDate":"2022-11-21",
      "Sponsor":"abc",
      "ContactRole":"cde",
      "ContactPos":"def"
  }
  this.form.patchValue(value_obj);
    

  }
   //待修改，資料寫死
  getjson(){
    this.fields = [{
      type: 'tabs',
      fieldGroup: [
        {
          templateOptions: { label: '主頁與標題'},
          fieldGroup: [
            {
              key: 'ProjTitle',
              type: 'input',
              templateOptions: {
                label: '計畫標題',
                required: true,  maxWordCount: 1, rows: 5
              },
            },
            {
              key: 'ProjVer',
              type: 'input',
              templateOptions: {
                label: '計畫版本',
                placeholder: '例如:1.00',
                required: false,
              },
            },
            {
              key: 'ProjDate',
              type: 'input', 
              templateOptions: {
                label: '計畫日期',
                type: 'date',
                required: true,
              },
            },
          ],
        },
        {
          templateOptions: { label: '聯絡資訊' },
          fieldGroup: [
            
            {
              key: 'Sponsor',
              type: 'input',
              templateOptions: {
                label: '試驗委託廠商/試驗機構',
                required: false,
              },
            },
            {
              key: 'ContactRole',
              type: 'input',
              templateOptions: {
                label: '聯絡人角色',
                required: false,
              },
            },
            {
              key: 'ContactPos',
              type: 'input',
              templateOptions: {
                label: '聯絡人單位/職稱',
                required: false,
              },
            },
            {
              key: 'ContactAddr',
              type: 'input',
              templateOptions: {
                label: '聯絡人地址',
                required: false,
              },
            },
            {
              key: 'Sponsor',
              type: 'input',
              templateOptions: {
                label: '試驗委託廠商/試驗機構',
                required: false,
              },
            },
            {
              key: 'ContactOfficialPhone',
              type: 'input',
              templateOptions: {
                label: '聯絡人辦公室電話',
                required: false,
              },
            },
            {
              key: 'ContactCellPhone',
              type: 'input',
              templateOptions: {
                label: '聯絡人手機',
                required: false,
              },
            },
            {
              key: 'ContactFAX',
              type: 'input',
              templateOptions: {
                label: '聯絡人傳真',
                required: false,
              },
            },
            {
              key: 'ContactEMail',
              type: 'input',
              templateOptions: {
                label: '聯絡人電子郵件信箱',
                required: false,
              },
            },
           
            {
              key: 'Org',
              type: 'input',
              templateOptions: {
                label: '試驗機構名稱',
                required: false,
              },
            },
            {
              key: 'OrgAddr',
              type: 'input',
              templateOptions: {
                label: '試驗機構地址',
                required: false,
              },
            },
            {
              key: 'OrgOther', 
              type: 'input',
              templateOptions: {
                label: '其他試驗機構名稱',
                required: false,
              },
            },
            {
              key: 'OrgAddrOther',
              type: 'input',
              templateOptions: {
                label: '其他試驗機構地址',
                required: false,
              },
            },
            
            {
              key: 'ManagerRole',
              type: 'input',
              templateOptions: {
                label: '主持人角色',
                required: false,
              },
            },
            {
              key: 'Manager',
              type: 'input',
              templateOptions: {
                label: '主持人姓名',
                required: false,
              },
            },
            {
              key: 'ManagerPos',
              type: 'input',
              templateOptions: {
                label: '主持人單位/職稱',
                required: false,
              },
            },
            {
              key: 'ManagerAddr',
              type: 'input',
              templateOptions: {
                label: '主持人地址',
                required: false,
              },
            },
            {
              key: 'ManagerOfficialPhone',
              type: 'input',
              templateOptions: {
                label: '主持人辦公室電話',
                required: false,
              },
            },
            {
              key: 'ManagerCellPhone',
              type: 'input',
              templateOptions: {
                label: '主持人手機',
                required: false,
              },
            },
            {
              key: 'ManagerFAX',
              type: 'input',
              templateOptions: {
                label: '主持人傳真',
                required: false,
              },
            },
            {
              key: 'ManagerEMail',
              type: 'input',
              templateOptions: {
                label: '主持人電子郵件信箱',
                required: false,
              },
            },
            
            {
              key: 'StaffRole',
              type: 'input',
              templateOptions: {
                label: '其他人員角色',
                required: false,
              },
            },
            {
              key: 'Staff',
              type: 'input',
              templateOptions: {
                label: '其他人員姓名',
                required: false,
              },
            },
            {
              key: 'StaffPos',
              type: 'input',
              templateOptions: {
                label: '其他人員單位/職稱',
                required: false,
              },
            },
            {
              key: 'StaffAddr',
              type: 'input',
              templateOptions: {
                label: '其他人員地址',
                required: false,
              },
            },
            {
              key: 'StaffOfficialPhone',
              type: 'input',
              templateOptions: {
                label: '其他人員辦公室電話',
                required: false,
              },
            },
            {
              key: 'StaffCellPhone',
              type: 'input',
              templateOptions: {
                label: '其他人員手機',
                required: false,
              },
            },
            {
              key: 'StaffFAX',
              type: 'input',
              templateOptions: {
                label: '其他人員傳真',
                required: false,
              },
            },
            {
              key: 'StaffEMail',
              type: 'input',
              templateOptions: {
                label: '其他人員電子郵件信箱',
                required: false,
              },
            },
          ],
        },
        {
          templateOptions: { label: '摘要' },
          fieldGroup: [
            {
              key: 'SummaryNote',
              type: 'textarea',
              templateOptions: {
                label: '摘要',
                type: 'textarea',
                required: false, maxWordCount: 1000, rows: 20
              },
            },
          ],
        },
        {
          templateOptions: { label: '試驗介紹' },
          fieldGroup: [
            {
              key: 'Org',
              type: 'input',
              templateOptions: {
                label: '試驗機構名稱',
                required: false,
              },
            },
            {
              key: 'OrgAddr',
              type: 'input',
              templateOptions: {
                label: '試驗機構地址',
                required: false,
              },
            },
  
            {
              key: 'OrgOther', 
              type: 'input',
              templateOptions: {
                label: '其他試驗機構名稱',
                required: false,
              },
            },
            {
              key: 'OrgAddrOther',
              type: 'input',
              templateOptions: {
                label: '其他試驗機構地址',
                required: false,
              },
            },
          ],
        },
  
        {
          templateOptions: { label: '試驗目的' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              templateOptions: {
                label: 'Country',
                required: false,
              },
            },
          ],
        },
        {
          templateOptions: { label: '受試者的選擇及退出' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              templateOptions: {
                label: 'Country',
                required: false,
              },
            },
          ],
        },
        {
          templateOptions: { label: '療效評估' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              templateOptions: {
                label: 'Country',
                required: false,
              },
            },
          ],
        },
        {
          templateOptions: { label: '安全性評估' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              templateOptions: {
                label: 'Country',
                required: false,
              },
            },
          ],
        },
        {
          templateOptions: { label: '統計分析' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              templateOptions: {
                label: 'Country',
                required: false,
              },
            },
          ],
        },
        {
          templateOptions: { label: '原始資料檢視' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              templateOptions: {
                label: 'Country',
                required: false,
              },
            },
          ],
        },
        {
          templateOptions: { label: '品質管制' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              templateOptions: {
                label: 'Country',
                required: false,
              },
            },
          ],
        },
        {
          templateOptions: { label: '倫理考量' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              templateOptions: {
                label: 'Country',
                required: false,
              },
            },
          ],
        },
        {
          templateOptions: { label: '資料處理及保存' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              templateOptions: {
                label: 'Country',
                required: false,
              },
            },
          ],
        },
        {
          templateOptions: { label: '財務及保險' },
          fieldGroup: [
            {
              key: 'country',
              type: 'input',
              templateOptions: {
                label: 'Country',
                required: false,
              },
            },
          ],
        }, 
  
  
        {
          templateOptions: { label: '發表著作原則' },
          fieldGroup: [
            {
              key: 'day',
              type: 'input',
              templateOptions: {
                type: 'date',
                label: 'Day of the trip',
                required: false,
              },
            },
          ],
        },
      ],
    }];
  }
  
  /*
  getjson(){
    this.http.get<FormlyFieldConfig[]>(this.url, {observe: 'response'})
    .subscribe((res) => {
      console.log(res.body);
      this.fields=res.body;
     
    });

  }
  getjson2(){
    this.http.get<FormlyFieldConfig[]>(this.url3, {observe: 'response'})
    .subscribe((res) => {
      console.log(res.body);
      this.fields=res.body;
    });
  }
  */
  store(){
    this.submittedFormData=JSON.stringify(this.model) ;
    alert(JSON.stringify(this.model));

// 回傳使用者填寫表單的內容    
/*
    let headers = new HttpHeaders({
      'Content-Type': "application/json"
    })
    let options = {
      headers
    };
    this.http.post<any>(this.url4, this.submittedFormData,options)
    //回傳內容(這裡用json, 也可以用一般字串儲存回傳)
   .subscribe((res) => {
     
  });*/



  }


}