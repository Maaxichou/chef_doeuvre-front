import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/repository/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private authService:AuthServiceService, private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.username, this.password)
    .subscribe(
      () => this.router.navigate(['/'])
    );
  }

}
