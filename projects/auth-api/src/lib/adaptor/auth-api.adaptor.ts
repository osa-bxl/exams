import { Injectable } from '@angular/core';
import { Adaptor } from '../interface/adaptor';
import { LoginAPIData, LoginRes } from '../interface/loginRes';
import { RegisterAPIData, RegisterRes } from '../interface/registerRes';
import { ForgotPasswordAPIData, ForgotPasswordRes } from '../interface/forgotPasswordRes';
import { VerifyCodeAPIData, VerifyCodeRes } from '../interface/verifyRes';
import { ResetPasswordRes } from '../interface/resetRes';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIAdaptorService implements Adaptor {

  constructor() { }
  adaptLogin(data: LoginAPIData): LoginRes {
    return {
      message: data.message,
      token: data.token,
      userEmail: data.user.email
    }
  }

  adaptRegister(data: RegisterAPIData): RegisterRes {
    return {
      message: data.message,
      token: data.token,
      userEmail: data.user.email,
    };
  }

  adaptForgot(data: any): ForgotPasswordRes {
    return {
      message: data.message,
      info: data.info,
      code: data.code,
    }
  }

  adaptVerifyCode(data: any): VerifyCodeRes {
    return {
      status: data.status ,
      message: data.message,
      code: data.code
    };
  }

  adaptResetPassword(data: any): ResetPasswordRes {
    return {
      message: data.message,
      token: data.token
    };
  }

}
