import { Component, DestroyRef, inject } from '@angular/core';
import { SocialAuthComponent } from "../../layout/auth-layout/components/social-auth/social-auth.component";
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [SocialAuthComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {
  isLoading: boolean = false;
  apiError: string = "";
  successMessage: string = "";

  private readonly _authApiService = inject(AuthApiService);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _toastr = inject(ToastrService);
  private readonly _router = inject(Router);

  verifyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
  });

  verifyCode(): void {
    this.isLoading = true;
    this.apiError = "";
    this.successMessage = "";

    this._authApiService.verifyCode(this.verifyCodeForm.value)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: () => {
          this.isLoading = false;
          this._toastr.success('Code verified successfully!', 'Success!');
          this.successMessage = "Code verified successfully! Redirecting...";
          setTimeout(() => {
            this._router.navigate(['/auth/reset-password']);
          }, 2000);
        },
        error: (err) => {
          this.isLoading = false;
          this.apiError = err.error.message;
          this._toastr.error(this.apiError, 'Error!');
        }
      });
  }
}
