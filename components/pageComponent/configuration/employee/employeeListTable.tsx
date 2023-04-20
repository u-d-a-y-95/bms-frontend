import {
  ActionIcon,
  Badge,
  Group,
  Loader,
  Pagination,
  Table,
  Tooltip,
} from "@mantine/core";
import { IconEye, IconTrash, IconWriting } from "@tabler/icons-react";
import { FC } from "react";

interface Props {
  isLoading: boolean;
  setActivePage: Function;
  total: number;
  activePage: number;
  employees: [
    {
      name: string;
      email: string;
      mobile: string;
      status: string;
    }
  ];
}

export const EmployeeTableList: FC<Props> = ({
  employees,
  isLoading,
  total,
  setActivePage,
  activePage,
}: Props) => {
  //   if (isLoading) return <Loader />;
  return (
    <>
      <Table striped highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Status</th>
            <th style={{ width: "150px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((item: any, index: number) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <Badge color={item.status === "INACTIVE" ? "red" : ""}>
                  {item.status}
                </Badge>
              </td>
              <td>
                <Group position="center">
                  <Tooltip label="view" variant="light" color="gray" withArrow>
                    <ActionIcon size={"sm"}>
                      <IconEye />
                    </ActionIcon>
                  </Tooltip>

                  <ActionIcon size={"sm"}>
                    <IconWriting />
                  </ActionIcon>
                  <ActionIcon size={"sm"}>
                    <IconTrash />
                  </ActionIcon>
                </Group>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        size="sm"
        mt="lg"
        position="right"
        total={Math.ceil(total / 10)}
        value={activePage}
        siblings={1}
        onChange={(page) => setActivePage(page)}
      />
    </>
  );
};
