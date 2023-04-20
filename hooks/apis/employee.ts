import {
  createEmployee,
  deleteEmployee,
  getEmployees,
} from "@/services/employee";
import { toast } from "@/utils/toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetEmployees = (filter: any) => {
  return useQuery({
    queryKey: ["employees", filter],
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
      client.invalidateQueries(["employees"]);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });
};

export const useDeleteEmployee = () => {
  const client = useQueryClient();
  return useMutation({
    mutationKey: ["employee", "delete"],
    mutationFn: deleteEmployee,
    onSuccess: (res) => {
      toast.success(res.message);
      client.invalidateQueries(["employees"]);
    },
    onError: (err: any) => {
      toast.error(err.message);
    },
  });
};
