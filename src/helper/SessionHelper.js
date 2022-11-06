class SessionHelper {
  static SetToken(AccessToken) {
    localStorage.setItem("AccessToken", AccessToken);
  }
  static GetToken() {
    return localStorage.getItem("AccessToken");
  }
  static RemoveToken() {
    return localStorage.removeItem("AccessToken");
  }
  static SetUserDetails(UserDetail) {
    localStorage.setItem("UserDetail", JSON.stringify(UserDetail));
  }
  static GetUserDetails() {
    return JSON.parse(localStorage.getItem("UserDetail"));
  }
  static RemoveUserDetails() {
    return localStorage.removeItem("UserDetail");
  }
  static SetOtpEmail(Email) {
    return localStorage.setItem("OTPEmail", Email);
  }
  static GetOtpEmail() {
    return localStorage.getItem("OTPEmail");
  }
  static SetOtpCode(Otp) {
    return localStorage.setItem("OTPCode", Otp);
  }
  static GetOtpCode() {
    return localStorage.getItem("OTPCode");
  }

  static SetVerifyEmail(Email) {
    return localStorage.setItem("VerifyEmail", Email);
  }
  static GetVerifyEmail() {
    return localStorage.getItem("VerifyEmail");
  }

  static ResetStorage() {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("User");
    localStorage.removeItem("OTPEmail");
    localStorage.removeItem("OTPCode");
    return true;
  }
}

export default SessionHelper;
