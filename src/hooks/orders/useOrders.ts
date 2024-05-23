import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createOrderApi, getOwnerOrdersApi } from "../../service/orderService";

export const useAddOrder = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: addOrder, isPending: isCreating } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-order"],
      });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { addOrder, isCreating };
};

export const useGetOrders = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-order"],
    queryFn: getOwnerOrdersApi,
  });

  const { orders } = data || {};

  return { isLoading, orders };
};
