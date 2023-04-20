import { useGetEmployees } from "@/hooks/apis/employee";
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Input,
  Loader,
  Pagination,
  Table,
  Title,
  Tooltip,
} from "@mantine/core";
import {
  IconEye,
  IconFilter,
  IconPlus,
  IconTrash,
  IconWriting,
} from "@tabler/icons-react";
import { useEffect } from "react";
import { EmployeeTableList } from "./employeeListTable";
import { EmployeeModal } from "./employeeModal";
import { useDisclosure } from "@mantine/hooks";

export default function Employee() {
  const { data, isLoading } = useGetEmployees();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Title order={3}>Employee</Title>
      <Flex mt="10px" justify="space-between">
        <Box w="30%">
          <Input placeholder="search" />
        </Box>
        <Flex gap="5px">
          <Button
            leftIcon={<IconPlus size={"1rem"} />}
            color="gray"
            variant="light"
            onClick={open}
          >
            Add
          </Button>
          <Button
            leftIcon={<IconFilter size={"1rem"} />}
            color="gray"
            variant="light"
          >
            Filter
          </Button>
        </Flex>
      </Flex>
      <Divider my="sm" />
      <EmployeeTableList
        employees={data?.data?.employees}
        total={data?.data?.total}
        isLoading={isLoading}
      />

      <EmployeeModal opened={opened} close={close} />
    </>
  );
}
