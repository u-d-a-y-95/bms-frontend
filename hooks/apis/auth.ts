import { login, signup } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
  });
};
export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};
