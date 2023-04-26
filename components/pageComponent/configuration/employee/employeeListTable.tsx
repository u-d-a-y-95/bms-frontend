import {
  ActionIcon,
  Badge,
  Box,
  Group,
  Loader,
  LoadingOverlay,
  Pagination,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconEye, IconTrash, IconWriting } from "@tabler/icons-react";
import React, { FC, ReactNode } from "react";

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
  deleteEmployee: Function;
  viewEmployeeById: Function;
}

export const EmployeeTableList: FC<Props> = ({
  employees,
  isLoading,
  total,
  setActivePage,
  activePage,
  viewEmployeeById,
  deleteEmployee,
}: Props) => {
  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => console.log("Opened"),
    onClose: () => console.log("Closed"),
  });
  const deleteConformation = (id: string) => {
    modals.openConfirmModal({
      title: "Confirmation",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete this employee? This action can not be
          undone
        </Text>
      ),
      labels: { confirm: "Yes", cancel: "No" },
      confirmProps: { color: "red", size: "xs" },
      cancelProps: {
        size: "xs",
        variant: "subtle",
      },
      onConfirm: () => deleteEmployee(id),
    });
  };

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={isLoading} overlayBlur={1} />
        <Table striped withBorder withColumnBorders>
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
                    <ActionBtn
                      label="view"
                      clickHandler={() => {
                        viewEmployeeById(item.id);
                      }}
                      id={item.id}
                      Icon={<IconEye />}
                    />
                    <ActionBtn
                      label="delete"
                      clickHandler={() => deleteConformation(item.id)}
                      id={item.id}
                      Icon={<IconTrash />}
                    />
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
      </Box>
      {/* <ConfirmationModal opened={opened} onClose={() => handlers.close()} /> */}
    </>
  );
};
interface ActionBtnProps {
  id: string;
  label: string;
  clickHandler: Function;
  Icon: ReactNode;
}
const ActionBtn: FC<ActionBtnProps> = ({
  id,
  label,
  clickHandler,
  Icon,
}: ActionBtnProps) => {
  return (
    <Tooltip label={label} variant="light" color="gray" withArrow>
      <ActionIcon size={"sm"} onClick={() => clickHandler("sdd")}>
        {Icon}
      </ActionIcon>
    </Tooltip>
  );
};
