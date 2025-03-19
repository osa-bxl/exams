import { Observable } from "rxjs";
import { LoginAPIData, LoginRes } from "../interface/loginRes";
import { RegisterAPIData, RegisterRes } from "../interface/registerRes";
import { ForgotPasswordAPIData, ForgotPasswordRes } from "../interface/forgotPasswordRes";
import { VerifyCodeAPIData, VerifyCodeRes } from "../interface/verifyRes";
import { ResetPasswordAPIData, ResetPasswordRes } from "../interface/resetRes";

export abstract class AuthAPI{
    abstract login(data:LoginAPIData) : Observable<LoginRes>
    abstract register(data: RegisterAPIData): Observable<RegisterRes>;
    abstract forgotPassword(data: ForgotPasswordAPIData): Observable<ForgotPasswordRes>;  
    abstract verifyCode(data: VerifyCodeAPIData): Observable<VerifyCodeRes>;
    abstract resetPassword(data: ResetPasswordAPIData): Observable<ResetPasswordRes>;
}