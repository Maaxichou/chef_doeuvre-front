import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from "../../entity/user";
import { AuthServiceService } from "../../repository/auth-service.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { confirmPassword } from '../register/ validators';
import { UserExistsValidator } from '../register/ user-exists.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  };
  confirm: string;

  form: FormGroup;

  @Output()
  registered = new EventEmitter();

  constructor(private authService: AuthServiceService, private fb:FormBuilder, private exists:UserExistsValidator) { }

  ngOnInit() {
    this.form = this.fb.group({
      'email': ['', [Validators.email, Validators.required], [this.exists]],
      'password': ['', [Validators.required, Validators.minLength(4)]],
      'confirm': ''
    },
    {
      validators: confirmPassword
    });

  }

  register() {
    this.authService.addUser(this.form.value).subscribe(
      () => this.registered.emit()
    );
  }
}
