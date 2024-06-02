import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, logout } from "../../service/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const useDetailUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserProfile,
    retry: false,
  });

  const role = data?.user?.role.toLowerCase();


  return { data, isLoading, role };
};

export const useLogOut = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync: logOut, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/", { replace: true });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { logOut, isPending };
};
