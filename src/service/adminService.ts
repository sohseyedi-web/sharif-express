import http from "./http";

export function getAllUsersList() {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

export function getUserData(phone: string) {
  return http.get(`/admin/user/detail/${phone}`).then(({ data }) => data.data);
}

export function getAllOrdersApi() {
  return http.get(`/orders/list/`).then(({ data }) => data.data);
}
export function getAllSupportsApi() {
  return http.get(`/supports/list/`).then(({ data }) => data.data);
}
