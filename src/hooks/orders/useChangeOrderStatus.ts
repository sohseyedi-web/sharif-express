import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeOrderStatusApi } from "../../service/orderService";

export const useChangeOrderStatus = (id: string, onClose: () => void) => {
  const queryClinet = useQueryClient();
  const { mutateAsync: changeOrderStatus, isPending: isUpdating } = useMutation(
    {
      mutationFn: changeOrderStatusApi,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClinet.invalidateQueries({ queryKey: ["owner-order", id] });
        onClose();
      },
      onError: (err: any) => {
        toast.error(err?.response?.data?.message);
      },
    }
  );

  return { changeOrderStatus, isUpdating };
};
