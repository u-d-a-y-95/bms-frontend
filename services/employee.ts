import { http } from "@/utils/http";

export const getEmployees = (filter: any) => {
  console.log(filter);
  return http.get("/org/employees");
};
