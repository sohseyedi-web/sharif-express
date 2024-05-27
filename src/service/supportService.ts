import { FieldValues } from "react-hook-form";
import http from "./http";
export function getSupport(qs: string) {
  return http.get(`/supports/list/${qs}`).then(({ data }) => data.data);
}

export function getOwnerSupportsApi() {
  return http.get("/supports/owner-support").then(({ data }) => data.data);
}

export function createSupportApi(data: FieldValues) {
  return http.post("/supports/add", data).then(({ data }) => data.data);
}



export function changeSupportStatusApi({
  id,
  data,
}: {
  id: string;
  data: FieldValues;
}) {
  return http.patch(`/supports/${id}`, data).then(({ data }) => data.data);
}

export function removeSupportApi(id: string) {
  return http.delete(`/supports/${id}`).then(({ data }) => data.data);
}
