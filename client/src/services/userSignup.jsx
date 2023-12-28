import axiosInstance from "../axios/axios";

export const userSignup = (values) => {
  return axiosInstance("").post("user/auth/signup", { ...values });
};

export const userLogin = (values) => {
  return axiosInstance("").post("user/auth/login", { ...values });
};

export const userCheck = () => {
  return axiosInstance("jwtToken").get("user/auth/check");
};
export const authCheck = () => {
  return axiosInstance("jwtToken").get("user/auth/check");
};
