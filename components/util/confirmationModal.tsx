import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Modal,
  Text,
  Title,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";

export const ConfirmationModal = ({ opened, onClose }) => {
  console.log(opened);
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      withCloseButton={false}
      padding={0}
      styles={{
        content: {
          padding: "0px !important",
        },
      }}
    >
      <Box>
        <Flex p="sm" justify="space-between" align="center">
          <Title order={4} color="red">
            Confirmation
          </Title>
          <ActionIcon size="sm" onClick={onClose}>
            <IconX />
          </ActionIcon>
        </Flex>
        <Divider />
      </Box>
      <Text size="sm" p="sm" my="md">
        Are you sure , you want to delete this? this action cannot be undone and
        you will be unable to recover any data
      </Text>
      <Box bg="#F1F3F5">
        <Group h="60px" position="right" px="md">
          <Button size="xs" color="gray" onClick={onClose}>
            No
          </Button>
          <Button color="red" size="xs">
            Yes, Do it
          </Button>
        </Group>
      </Box>
    </Modal>
  );
};
