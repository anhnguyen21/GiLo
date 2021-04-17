import { makeActionCreator, makeConstantCreator } from '../../Utils/Utils';
export const LoginTypes = makeConstantCreator(
  'USER_LOGIN',
  'USER_LOGIN_SUCCESS',
  'USER_LOGIN_FAILURE',
  'USER_LOGOUT',
);
export const SignUpTypes = makeConstantCreator(
  'USER_SIGNUP',
  'USER_SIGNUP_SUCCESS',
  'USER_SIGNUP_FAILURE',
);

export const ProfileTypes = makeConstantCreator(
  'USER_PROFILE',
  'USER_PROFILE_SUCCESS',
  'USER_PROFILE_FAILURE',
);

const userLogin = (data) => makeActionCreator(LoginTypes.USER_LOGIN, { data });

const userLoginSuccess = (response) =>
  makeActionCreator(LoginTypes.USER_LOGIN_SUCCESS, { response });

const userLoginFailure = (error) => makeActionCreator(LoginTypes.USER_LOGIN_FAILURE, { error });

const userSignUp = (data, onSuccess) =>
  makeActionCreator(SignUpTypes.USER_SIGNUP, { data, onSuccess });

const userSignUpSuccess = (response) =>
  makeActionCreator(SignUpTypes.USER_SIGNUP_SUCCESS, { response });

const userSignUpFailure = (error) => makeActionCreator(SignUpTypes.USER_SIGNUP_FAILURE, { error });

const userProfile = (data, onSuccess) =>
  makeActionCreator(ProfileTypes.USER_PROFILE, { data, onSuccess });

const userProfileSuccess = (response) =>
  makeActionCreator(ProfileTypes.USER_PROFILE_SUCCESS, { response });

const userProfileFailure = (error) =>
  makeActionCreator(ProfileTypes.USER_PROFILE_FAILURE, { error });

const userLogout = () => makeActionCreator(LoginTypes.USER_LOGOUT);
export default {
  userLogin,
  userLoginSuccess,
  userLoginFailure,
  userLogout,
  userSignUp,
  userSignUpSuccess,
  userSignUpFailure,
  userProfile,
  userProfileSuccess,
  userProfileFailure,
};
