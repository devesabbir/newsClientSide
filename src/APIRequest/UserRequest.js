//Internal Import
import SessionHelper from "../helper/SessionHelper";
import ToastMessage from "../helper/ToastMessage";
import { SetUserDetails } from "../redux/slices/UserSlice";
import store from "../redux/store/store";
import RestClient from "./RestClient";

class UserRequest {
  static async UserDetails() {
    const { data } = await RestClient.getRequest("/User/UserDetails");
    if (data) {
      store.dispatch(SetUserDetails(data?.[0]));
      return true;
    }
  }

  static async SendRecoveryOtp(Email) {
    const { data } = await RestClient.getRequest(
      `/User/SendRecoveryOtp/${Email}`,
    );
    if (data) {
      ToastMessage.successMessage(data?.message);
      SessionHelper.SetOtpEmail(Email);
      return true;
    }
  }

  static async VerifyRecoveryOtp(Otp) {
    const Email = SessionHelper.GetOtpEmail();
    const { data } = await RestClient.getRequest(
      `/User/VerifyRecoveryOtp/${Email}/${Otp}`,
    );
    if (data) {
      SessionHelper.SetOtpCode(Otp);
      ToastMessage.successMessage(data?.message);
      return true;
    }
  }

  static async RecoveryResetPass(PostBody) {
    const Email = SessionHelper.GetOtpEmail();
    const Otp = SessionHelper.GetOtpCode();
    const { data } = await RestClient.postRequest(
      `/User/RecoveryResetPass/${Email}/${Otp}`,
      PostBody,
    );
    if (data) {
      ToastMessage.successMessage(data?.message);
      return true;
    }
  }

  static async VerifyAccountSentOtp() {
    const Email = SessionHelper.GetVerifyEmail();
    const { data } = await RestClient.getRequest(
      `/User/VerifyAccountSentOtp/${Email}`,
    );
    if (data) {
      ToastMessage.successMessage(data?.message);
      return true;
    }
  }

  static async VerifyAccountVerifyOtp(Email, Otp) {
    const { data } = await RestClient.getRequest(
      `/User/VerifyAccountVerifyOtp/${Email}/${Otp}`,
    );
    if (data) {
      ToastMessage.successMessage(data?.message);
      return true;
    }
  }

  static async UserUpdate(PostBody) {
    const { data } = await RestClient.updateRequest(
      `/User/UserUpdate`,
      PostBody,
    );
    if (data) {
      ToastMessage.successMessage(data?.message);
      return true;
    }
  }

  static async UserChangePassword(PostBody) {
    const { data } = await RestClient.putRequest(
      `/User/UserChangePassword`,
      PostBody,
    );
    if (data) {
      ToastMessage.successMessage(data?.message);
      return true;
    }
  }
}

export default UserRequest;
