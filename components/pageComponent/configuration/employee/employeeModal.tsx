import { useCreateEmployees, useGetEmployeeById } from "@/hooks/apis/employee";
import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  Flex,
  Grid,
  Group,
  Modal,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { Form, useForm, zodResolver } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().optional(),
  mobile: z.string().regex(/^(?:\+8801|01)[3-9]\d{8}$/),
  address: z.string().optional(),
});

export const EmployeeModal = ({ opened, close, modal }: any) => {
  const { data: employee } = useGetEmployeeById(modal?.data?.id);

  const largeScreen = useMediaQuery("(min-width:600px)");
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      name: "",
      mobile: "",
      email: "",
      address: "",
    },
    validate: zodResolver(schema),
  });

  const { mutateAsync } = useCreateEmployees();

  useEffect(() => {
    if (opened) form.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  useEffect(() => {
    if (employee) {
      form.setValues(employee.data);
    }
  }, [employee]);

  const save = async (values: any) => {
    const res = await mutateAsync(values);
    if (res.status === 201) {
      close();
    }
  };

  const disable = modal.state === "view";

  return (
    <Drawer
      size={largeScreen ? "lg" : "100%"}
      opened={opened}
      onClose={close}
      withCloseButton={false}
      styles={{
        body: {
          height: "100%",
          padding: 0,
        },
      }}
    >
      <Flex direction={"column"} style={{ height: "100%" }}>
        <Box h="70px">
          <Flex h="100%" align="center" justify="space-between">
            <Title pl="30px" order={3} style={{ textTransform: "capitalize" }}>
              {modal.state} Employee
            </Title>
            {employee && (
              <Badge
                color={employee.data.status === "INACTIVE" ? "red" : ""}
                mr="30px"
              >
                {employee.data.status}
              </Badge>
            )}
          </Flex>
          <Divider />
        </Box>
        <form
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={form.onSubmit((v) => save(v))}
        >
          <div style={{ flexGrow: 1, padding: "30px" }}>
            <Flex direction="column" gap="md">
              <TextInput
                label="Name"
                placeholder="Enter Employee Name"
                withAsterisk
                {...form.getInputProps("name")}
                disabled={disable}
              />
              <TextInput
                label="Mobile"
                withAsterisk
                placeholder="Enter Employee mobile"
                {...form.getInputProps("mobile")}
                disabled={disable}
              />
              <TextInput
                label="Email"
                type="email"
                placeholder="Enter Employee email"
                {...form.getInputProps("email")}
                disabled={disable}
              />
              <Textarea
                label="Address"
                placeholder="Enter Employee Address"
                {...form.getInputProps("address")}
                disabled={disable}
              />
            </Flex>
          </div>
          <Box h="70px">
            <Divider />
            <Group position="right" h="100%" p="lg">
              <Button color="red" onClick={close}>
                Cancel
              </Button>
              {modal.state !== "view" && (
                <>
                  <Button color="teal" type="submit">
                    Add
                  </Button>
                </>
              )}
            </Group>
          </Box>
        </form>
      </Flex>
    </Drawer>
  );
};
