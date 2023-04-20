import { http } from "@/utils/http";

export const getEmployees = (filter: any) => {
  return http.get("/org/employees");
};
export const createEmployee = (employee: any) => {
  return http.post("/org/employees", employee);
};
