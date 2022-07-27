import type {
  User_account_update,
  User_upload_profile,
} from "@@requests/user/types";

export const request_user_profile_info = (
  payload: PayloadBody<{ address: string }>
) => {
  return request
    .post(`/user/user-profile-info`, {
      body: payload,
    })
    .then((res) => {
      if (res.result !== true) {
        return Promise.reject(res.result);
      }
      return res.result;
    });
};

export const request_user_account_update = (
  payload: PayloadBody<User_account_update.payload>
) => {
  return request
    .post(`/user/user-account-update`, {
      body: payload,
    })
    .then((res) => {
      if (res.result !== true) {
        return Promise.reject(res.result);
      }
      return res.result;
    });
};

export const request_user_upload_profile = (
  payload: PayloadBody<User_upload_profile.payload>
) => {
  return request.post(`/user/user-upload-profile`, {
    body: payload,
  });
};
