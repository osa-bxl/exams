import { Component, DestroyRef, inject } from '@angular/core';
import { SocialAuthComponent } from "../../layout/auth-layout/components/social-auth/social-auth.component";
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService} from 'auth-api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ToastrService } from 'ngx-toastr';

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
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _toastr= inject(ToastrService);
  private readonly _router= inject(Router);

  forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  forgotPassword(): void {
    this.isLoading = true;
    this._authApiService.forgotPassword(this.forgotPasswordForm.value)
    .pipe(takeUntilDestroyed(this._destroyRef)).subscribe({
      next: (res) => {
        this.isLoading = false;
        this._toastr.success('Please, Check Your Email or junk emails', 'Success!');
        this.successMessage = `${res.info}` ;
        this._router.navigate(['/auth/verify-code'])
        
      },
      error: (err) => {
        this.isLoading = false;
        this.apiError = err.error.message ;
      }
    });
  }
}
