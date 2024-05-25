import { FieldValues } from "react-hook-form";
import http from "./http";
export function getOrders(qs: string) {
  return http.get(`/orders/list/${qs}`).then(({ data }) => data.data);
}

export function getOwnerOrdersApi() {
  return http.get("/orders/owner-order").then(({ data }) => data.data);
}

export function getOrder(id: string) {
  return http.get(`/orders/${id}`).then(({ data }) => data.data);
}

export function createOrderApi(data: FieldValues) {
  return http.post("/orders/add", data).then(({ data }) => data.data);
}

export function editOrderApi({
  id,
  newOrder,
}: {
  id: string;
  newOrder: FieldValues;
}) {
  return http
    .patch(`/orders/update/${id}`, newOrder)
    .then(({ data }) => data.data);
}

export function changeOrderStatusApi({
  id,
  data,
}: {
  id: string;
  data: FieldValues;
}) {
  return http.patch(`/orders/${id}`, data).then(({ data }) => data.data);
}

export function removeOrderApi(id: string) {
  return http.delete(`/orders/${id}`).then(({ data }) => data.data);
}
