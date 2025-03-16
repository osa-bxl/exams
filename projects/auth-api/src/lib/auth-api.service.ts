import { inject, Injectable } from '@angular/core';
import { AuthAPI } from './base/authAPI';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthEndPoint } from './enums/authAPI.endpoint';
import { AuthAPIAdaptorService } from './adaptor/auth-api.adaptor';
import { LoginAPIData, LoginRes } from './interface/loginRes';
import { RegisterRes, RegisterAPIData } from './interface/registerRes';
import { ForgotPasswordAPIData, ForgotPasswordRes } from './interface/forgotPasswordRes';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthAPI {

  private readonly _httpClient = inject(HttpClient);
  private readonly _authAPIAdaptorService = inject(AuthAPIAdaptorService);

  constructor() { }

   login(data: LoginAPIData): Observable<LoginRes> {
    return this._httpClient.post(AuthEndPoint.LOGIN, data).pipe(
      map((res: any)=> this._authAPIAdaptorService.adapt(res)),
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
}
