export interface ResetPasswordAPIData {
    email: string;
    newPassword: string;
  }
  
  export interface ResetPasswordRes {
    message: string;
    token?: string;
  }
  