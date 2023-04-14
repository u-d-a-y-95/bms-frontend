import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Input,
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

export default function Employee() {
  return (
    <>
      <Title order={3}>Employee</Title>
      <Flex mt="30px" justify="space-between">
        <Box w="30%">
          <Input placeholder="search" />
        </Box>
        <Flex gap="5px">
          <Button
            leftIcon={<IconPlus size={"1rem"} />}
            color="gray"
            variant="light"
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
          <tr>
            <td>1</td>
            <td>Saiful Islam uday</td>
            <td>uday.dev.bd@gmail.com</td>
            <td>01964892201</td>
            <td>
              <Badge>Active</Badge>
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
          <tr>
            <td>2</td>
            <td>Saiful Islam uday</td>
            <td>uday.dev.bd@gmail.com</td>
            <td>01964892201</td>
            <td>
              <Badge color="red">Inactive</Badge>
            </td>
            <td>
              <Group position="center">
                <ActionIcon size={"sm"}>
                  <IconEye />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconWriting />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconTrash />
                </ActionIcon>
              </Group>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Saiful Islam uday</td>
            <td>uday.dev.bd@gmail.com</td>
            <td>01964892201</td>
            <td>
              <Badge color="red">Inactive</Badge>
            </td>
            <td>
              <Group position="center">
                <ActionIcon size={"sm"}>
                  <IconEye />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconWriting />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconTrash />
                </ActionIcon>
              </Group>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Saiful Islam uday</td>
            <td>uday.dev.bd@gmail.com</td>
            <td>01964892201</td>
            <td>
              <Badge color="red">Inactive</Badge>
            </td>
            <td>
              <Group position="center">
                <ActionIcon size={"sm"}>
                  <IconEye />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconWriting />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconTrash />
                </ActionIcon>
              </Group>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Saiful Islam uday</td>
            <td>uday.dev.bd@gmail.com</td>
            <td>01964892201</td>
            <td>
              <Badge color="red">Inactive</Badge>
            </td>
            <td>
              <Group position="center">
                <ActionIcon size={"sm"}>
                  <IconEye />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconWriting />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconTrash />
                </ActionIcon>
              </Group>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Saiful Islam uday</td>
            <td>uday.dev.bd@gmail.com</td>
            <td>01964892201</td>
            <td>
              <Badge color="red">Inactive</Badge>
            </td>
            <td>
              <Group position="center">
                <ActionIcon size={"sm"}>
                  <IconEye />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconWriting />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconTrash />
                </ActionIcon>
              </Group>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Saiful Islam uday</td>
            <td>uday.dev.bd@gmail.com</td>
            <td>01964892201</td>
            <td>
              <Badge color="red">Inactive</Badge>
            </td>
            <td>
              <Group position="center">
                <ActionIcon size={"sm"}>
                  <IconEye />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconWriting />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconTrash />
                </ActionIcon>
              </Group>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Saiful Islam uday</td>
            <td>uday.dev.bd@gmail.com</td>
            <td>01964892201</td>
            <td>
              <Badge color="red">Inactive</Badge>
            </td>
            <td>
              <Group position="center">
                <ActionIcon size={"sm"}>
                  <IconEye />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconWriting />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconTrash />
                </ActionIcon>
              </Group>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Saiful Islam uday</td>
            <td>uday.dev.bd@gmail.com</td>
            <td>01964892201</td>
            <td>
              <Badge color="red">Inactive</Badge>
            </td>
            <td>
              <Group position="center">
                <ActionIcon size={"sm"}>
                  <IconEye />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconWriting />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconTrash />
                </ActionIcon>
              </Group>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Saiful Islam uday</td>
            <td>uday.dev.bd@gmail.com</td>
            <td>01964892201</td>
            <td>
              <Badge color="red">Inactive</Badge>
            </td>
            <td>
              <Group position="center">
                <ActionIcon size={"sm"}>
                  <IconEye />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconWriting />
                </ActionIcon>
                <ActionIcon size={"sm"}>
                  <IconTrash />
                </ActionIcon>
              </Group>
            </td>
          </tr>
        </tbody>
      </Table>
      <Pagination
        size="sm"
        mt="lg"
        position="right"
        total={25}
        // boundaries={2}
        defaultValue={10}
        siblings={1}
      />
    </>
  );
}
