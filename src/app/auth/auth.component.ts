import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  btnText = 'Register';

  constructor() { }

  ngOnInit() {
  }

  changeText() {
    if(this.btnText === 'Login') {
      this.btnText = 'Register';
    }else {
      this.btnText = 'Login';
    }
  }

}
