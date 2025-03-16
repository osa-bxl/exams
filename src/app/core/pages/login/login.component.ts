import { Component, inject } from '@angular/core';
import { SocialAuthComponent } from "../../layout/auth-layout/components/social-auth/social-auth.component";
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';

@Component({
  selector: 'app-login',
  imports: [SocialAuthComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  hidePassword: boolean = false;
  isLoading: boolean = false;
  apiError: string = "";

  private readonly _authApiService = inject(AuthApiService);
  private readonly _router= inject(Router);

  loginForm: FormGroup = new FormGroup( {
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
  })

  login(): void {
    this.isLoading = true;
    this._authApiService.login(this.loginForm.value).subscribe({
      next: (res)=> {
        this.isLoading = false;
        this._router.navigate(['/'])
      },
      error: (err)=> {
        this.isLoading = false;
        console.log(err);
        this.apiError = `${err.error.message}`
      }
    })
  }

  togglePassword(){
    this.hidePassword = !this.hidePassword
  }


}
