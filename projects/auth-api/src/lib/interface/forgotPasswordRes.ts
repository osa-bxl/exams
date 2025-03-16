export interface ForgotPasswordAPIData {
    email: string;
  }

export interface ForgotPasswordRes {
    message: string;
    info?: string;  
    code?: number;  
}