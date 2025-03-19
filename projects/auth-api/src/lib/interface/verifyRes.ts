export interface VerifyCodeAPIData {
  resetCode: string;
}

export interface VerifyCodeRes {
  status?: string;
  message?: string;
  code?: number;
}
