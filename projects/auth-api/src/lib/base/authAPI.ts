import { Observable } from "rxjs";
import { LoginAPIData } from "../interface/loginRes";
import { RegisterAPIData, RegisterRes } from "../interface/registerRes";
import { ForgotPasswordAPIData, ForgotPasswordRes } from "../interface/forgotPasswordRes";

export abstract class AuthAPI{
    abstract login(data:LoginAPIData) : Observable<any>

    abstract register(data: RegisterAPIData): Observable<RegisterRes>;
    abstract forgotPassword(data: ForgotPasswordAPIData): Observable<ForgotPasswordRes>;
}