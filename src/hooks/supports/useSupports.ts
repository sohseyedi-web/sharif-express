import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import {
  createSupportApi,
  getOwnerSupportsApi,
  removeSupportApi,
} from "../../service/supportService";

export const useAddSupport = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: addSupport, isPending: isCreating } = useMutation({
    mutationFn: createSupportApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-support"],
      });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { addSupport, isCreating };
};

export const useGetSupports = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-support"],
    queryFn: getOwnerSupportsApi,
  });

  const { supports } = data || {};

  return { isLoading, supports };
};

export const useRemoveSupport = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: removeSupport } = useMutation({
    mutationFn: removeSupportApi,
    onSuccess: () => {
      toast.success("درخواست با موفقیت حذف شد");
      queryClient.invalidateQueries({
        queryKey: ["owner-support"],
      });
    },
    onError: (error: any) => toast.error(error?.response?.data?.message),
  });

  return { isDeleting, removeSupport };
};
