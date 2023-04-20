import { getEmployees } from "@/services/employee";
import { useQuery } from "@tanstack/react-query";

export const useGetEmployees = () => {
  return useQuery({
    queryKey: ["employess"],
    queryFn: getEmployees,
  });
};
