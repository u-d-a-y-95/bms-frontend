import { createEmployee, getEmployees } from "@/services/employee";
import { toast } from "@/utils/toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetEmployees = () => {
  return useQuery({
    queryKey: ["employess"],
    queryFn: getEmployees,
  });
};
export const useCreateEmployees = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["employee", "create"],
    mutationFn: createEmployee,
    onSuccess: (res) => {
      toast.success(res.message);
      client.invalidateQueries(["employess"]);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });
};
