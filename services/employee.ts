import { http } from "@/utils/http";

export const getEmployees = ({ queryKey }: any) => {
  const { activePage, search } = queryKey[1];
  return http.get(
    `/org/employees/?search=${search}&offset=${(activePage - 1) * 10}`
  );
};
export const createEmployee = (employee: any) => {
  return http.post("/org/employees", employee);
};

export const deleteEmployee = (id: string) => {
  return http.delete(`/org/employees/${id}`);
};
