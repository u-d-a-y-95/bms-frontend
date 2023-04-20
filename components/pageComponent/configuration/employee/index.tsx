import { useDeleteEmployee, useGetEmployees } from "@/hooks/apis/employee";
import { Box, Button, Divider, Flex, Input, Title } from "@mantine/core";
import { useDebouncedState, useDisclosure } from "@mantine/hooks";
import { IconFilter, IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { EmployeeTableList } from "./employeeListTable";
import { EmployeeModal } from "./employeeModal";
import { ConfirmationModal } from "@/components/util/confirmationModal";

export default function Employee() {
  const [filter, setFilter] = useState({
    activePage: 1,
    search: "",
  });
  const [search, setSearch] = useDebouncedState("", 500);
  const { data, isLoading, isFetching } = useGetEmployees(filter);
  const { mutate } = useDeleteEmployee();
  const setActivePage = (page: number) => {
    setFilter({
      ...filter,
      activePage: page,
    });
  };
  useEffect(() => {
    setFilter({
      ...filter,
      activePage: 1,
      search,
    });
  }, [search]);
  const [opened, { open, close }] = useDisclosure(false);

  const deleteEmployee = (id: string) => {
    mutate(id);
  };

  return (
    <>
      <Title order={3}>Employee</Title>
      <Flex mt="10px" justify="space-between">
        <Box w="30%">
          <Input
            placeholder="search"
            onChange={(e) => {
              setSearch(e.target.value);
              // setActivePage(1);
            }}
          />
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
        isLoading={isLoading || isFetching}
        activePage={filter.activePage}
        setActivePage={setActivePage}
        deleteEmployee={deleteEmployee}
      />

      <EmployeeModal opened={opened} close={close} />
    </>
  );
}
