import { Component, inject } from '@angular/core';
import { SocialAuthComponent } from "../../layout/auth-layout/components/social-auth/social-auth.component";
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService} from 'auth-api';

@Component({
  selector: 'app-forgot-password',
  imports: [SocialAuthComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  isLoading: boolean = false;
  apiError: string = "";
  successMessage: string = "";

  private readonly _authApiService = inject(AuthApiService);
  private readonly _router = inject(Router);

  forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  forgotPassword(): void {
    this.isLoading = true;
    this._authApiService.forgotPassword(this.forgotPasswordForm.value).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.successMessage = `${res.info}` ;
      },
      error: (err) => {
        this.isLoading = false;
        this.apiError = err.error.message ;
      }
    });
  }
}
