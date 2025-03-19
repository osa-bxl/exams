import { Component, DestroyRef, inject } from '@angular/core';
import { SocialAuthComponent } from "../../layout/auth-layout/components/social-auth/social-auth.component";
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [RouterLink, SocialAuthComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  hidePassword: boolean = false;
    isLoading: boolean = false;
    apiError: string = "";
  
    private readonly _authApiService = inject(AuthApiService);
    private readonly _router= inject(Router);
    private readonly _destroyRef= inject(DestroyRef);
    private readonly _toastr= inject(ToastrService);
  
    registerForm: FormGroup = new FormGroup( {
      username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      firstName: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z]+$/)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z]+$/)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
      rePassword: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    }, {validators: this.confirmPassword})
  
    register(): void {
      this.isLoading = true;
      this._authApiService.register(this.registerForm.value)
      .pipe(takeUntilDestroyed(this._destroyRef)).subscribe({
        next: (res)=> {
          this.isLoading = true;
          this._toastr.success('Registered successfully', 'Success!');
          this._router.navigate(['/auth/login'])          
        },
        error: (err)=> {
          this.isLoading = false;
          this.apiError = `${err.error.message}`
        }
      })
    }
  
    confirmPassword(input: AbstractControl) {
      const password = input.get('password')?.value;
      const rePassword = input.get('rePassword')?.value;
  
      return password === rePassword ? null : {missMatch: true} 
    }

    togglePassword(){
      this.hidePassword = !this.hidePassword
    }
  
}
