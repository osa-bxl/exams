import { Component, DestroyRef, inject } from '@angular/core';
import { SocialAuthComponent } from "../../layout/auth-layout/components/social-auth/social-auth.component";
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [SocialAuthComponent, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  hidePassword: boolean = false;
  isLoading: boolean = false;
  apiError: string = "";

  private readonly _authApiService = inject(AuthApiService);
  private readonly _router= inject(Router);
  private readonly _destroyRef= inject(DestroyRef);

  resetPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    ]),
    confirmPassword: new FormControl(null, Validators.required)
  }, {validators: this.confirmPassword});

  resetPassword(): void {
    if (this.resetPasswordForm.invalid) return;

    const { newPassword, confirmPassword } = this.resetPasswordForm.value;
    if (newPassword !== confirmPassword) {
      this.apiError = "Passwords do not match";
      return;
    }

    this.isLoading = true;
    this._authApiService.resetPassword({ email: "sam_belge@hotmail.com", newPassword }) // Replace email dynamically
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: () => {
          this.isLoading = false;
          this._router.navigate(['/auth/login']);
        },
        error: (err) => {
          this.isLoading = false;
          this.apiError = err.error.message || "An error occurred";
        }
      });
  }

  confirmPassword(input: AbstractControl) {
        const password = input.get('newPassword')?.value;
        const rePassword = input.get('confirmPassword')?.value;
    
        return password === rePassword ? null : {missMatch: true} 
      }

  togglePassword(){
    this.hidePassword = !this.hidePassword
  }
}
