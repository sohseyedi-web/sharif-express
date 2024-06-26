import { useQuery } from "@tanstack/react-query";
import {
  getAllOrdersApi,
  getAllSupportsApi,
  getAllUsersList,
  getUserData,
} from "./../../service/adminService";

export const useAllGetOrders = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-order"],
    queryFn: getAllOrdersApi,
  });

  const { orders } = data || {};

  return { isLoading, orders };
};
export const useAllGetUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsersList,
  });

  return { isLoading, data };
};
export const useAllGetSupports = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-order"],
    queryFn: getAllSupportsApi,
  });

  const { supports } = data || {};

  return { isLoading, supports };
};
export const useGetDetailUser = (phone : string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["user-deatail"],
    queryFn:() => getUserData(phone),
  });

   

  const {supports , orders,user} = data || {};

  return { isLoading, supports , orders,user };
};
