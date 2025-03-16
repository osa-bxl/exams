import { Injectable } from '@angular/core';
import { Adaptor } from '../interface/adaptor';
import { LoginAPIData, LoginRes } from '../interface/loginRes';
import { RegisterAPIData, RegisterRes } from '../interface/registerRes';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIAdaptorService implements Adaptor {

  constructor() { }
  adapt(data: LoginAPIData): LoginRes {
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

}
