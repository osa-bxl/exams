
export class AuthEndPoint {
    static readonly BASE_URL = `https://exam.elevateegy.com/api/v1/auth`;

    static readonly LOGIN = `${this.BASE_URL}/signin`;
    static readonly REGISTER = `${this.BASE_URL}/signup`;
    static readonly FORGOT_PASSWORD = `${this.BASE_URL}/forgotPassword`; 
    static readonly CHANGE_PASSWORD = `${this.BASE_URL}/changePassword`;
    static readonly DELETE_ACCOUNT = `${this.BASE_URL}/deleteMe`;
    static readonly EDIT_PROFILE = `${this.BASE_URL}/editProfile`;
    static readonly LOGOUT = `${this.BASE_URL}/logout`;
    static readonly LOGIN_USER = `${this.BASE_URL}/profileData`;
    static readonly VERIFY_CODE = `${this.BASE_URL}/verifyResetCode`;
    static readonly RESET_PASSWORD = `${this.BASE_URL}/resetPassword`;

  }

  