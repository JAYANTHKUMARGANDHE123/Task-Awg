import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService} from '../services/user.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private route:Router) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.userService.register(this.registrationForm.value).subscribe(
        response => {
          console.log('User registered:', response);
          this.registrationForm.reset();
          this.route.navigateByUrl('/login')
        },
        error => {
          console.error('Error registering user:', error);
        }
      );
    }
  }
}

