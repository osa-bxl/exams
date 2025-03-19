import { ForgotPasswordAPIData, ForgotPasswordRes } from "./forgotPasswordRes"
import { LoginAPIData, LoginRes } from "./loginRes"
import { RegisterAPIData, RegisterRes } from "./registerRes"
import { ResetPasswordAPIData, ResetPasswordRes } from "./resetRes"

export interface Adaptor {
    adaptLogin(data:LoginAPIData): LoginRes
    adaptRegister(data:RegisterAPIData):RegisterRes
    adaptForgot(data: ForgotPasswordAPIData): ForgotPasswordRes
    adaptResetPassword(data: ResetPasswordAPIData): ResetPasswordRes;
}
 