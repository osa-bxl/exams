import { inject, Injectable } from '@angular/core';
import { AuthAPI } from './base/authAPI';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndPoint } from './enums/authAPI.endpoint';
import { AuthAPIAdaptorService } from './adaptor/auth-api.adaptor';
import { LoginAPIData, LoginRes } from './interface/loginRes';
import { RegisterRes, RegisterAPIData } from './interface/registerRes';
import { ForgotPasswordAPIData, ForgotPasswordRes } from './interface/forgotPasswordRes';
import { VerifyCodeAPIData, VerifyCodeRes } from './interface/verifyRes';
import { ResetPasswordAPIData, ResetPasswordRes } from './interface/resetRes';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthAPI {

  private readonly _httpClient = inject(HttpClient);
  private readonly _authAPIAdaptorService = inject(AuthAPIAdaptorService);

  constructor() { }

   login(data: LoginAPIData): Observable<LoginRes> {
    return this._httpClient.post(AuthEndPoint.LOGIN, data).pipe(
      map((res: any)=> this._authAPIAdaptorService.adaptLogin(res)),
      catchError((err) => throwError(() => err))
    )
  }

  register(data: RegisterAPIData): Observable<RegisterRes> {
    return this._httpClient.post<RegisterAPIData>(AuthEndPoint.REGISTER, data).pipe(
      map((res) => this._authAPIAdaptorService.adaptRegister(res)),
      catchError((err) => throwError(() => err))
    );
  }

  forgotPassword(data: ForgotPasswordAPIData): Observable<ForgotPasswordRes> {
    return this._httpClient.post<ForgotPasswordRes>(AuthEndPoint.FORGOT_PASSWORD, data);
  }

  verifyCode(data: VerifyCodeAPIData): Observable<VerifyCodeRes> {
    return this._httpClient.post<VerifyCodeRes>(AuthEndPoint.VERIFY_CODE, data).pipe(
      map((res: any) => this._authAPIAdaptorService.adaptVerifyCode(res)),
      catchError((err) => throwError(() => err))
    );
  }

  resetPassword(data: ResetPasswordAPIData): Observable<ResetPasswordRes> {
    return this._httpClient.put<ResetPasswordRes>(AuthEndPoint.RESET_PASSWORD, data).pipe(
      map((res: any) => this._authAPIAdaptorService.adaptResetPassword(res)),
      catchError((err) => throwError(() => err))
    );
  }
}
