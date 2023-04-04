import { login, signup } from "@/services/auth";
import { toast } from "@/utils/toast";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
  });
};
export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: () => toast.error("login successfully"),
    onError: (res: string) => {
      console.log(res);
      toast.error("login successfully");
    },
  });
};
