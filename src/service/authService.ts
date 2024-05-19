import { FieldValues } from "react-hook-form";
import http from "./http";

export function getOTP(data: FieldValues) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function checkOTP(data: FieldValues) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export function completeProfile(data: FieldValues) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function getUserProfile() {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export function updateUserProfile(data: FieldValues) {
  return http.patch("/user/update", data).then(({ data }) => data.data);
}

export function logout() {
  return http.post("/user/logout");
}
