import { signup } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
  });
};
