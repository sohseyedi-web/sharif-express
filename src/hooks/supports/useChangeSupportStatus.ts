import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeSupportStatusApi } from "../../service/supportService";

export const useChangeSupportStatus = (id: string) => {
  const queryClinet = useQueryClient();
  const { mutateAsync: changeSupportStatus, isPending: isUpdating } =
    useMutation({
      mutationFn: changeSupportStatusApi,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClinet.invalidateQueries({ queryKey: ["owner-support", id] });
      },
      onError: (err: any) => {
        toast.error(err?.response?.data?.message);
      },
    });

  return { changeSupportStatus, isUpdating };
};
