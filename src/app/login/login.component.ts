import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}
  ngOnInit() {}
  onSubmit() {
    const { username, password } = this.form.value;
    this.authService.login(username, password).subscribe((res: any) => {
      if (res.token) {
        this.router.navigate(['']); // 跟express server連動(用node.js去撰寫)，跟server做溝通(動作:使用者做回傳，用網址連結)
        console.log(123);
      } else {
        console.log('error', res);
        //這邊寫死在前端
      }
    });
  }
}
// 接後端回傳的true/false，是的話傳是，否的話報錯


/*
ngOnInit() {
  }
  login(): void {
   
  }
}
*/