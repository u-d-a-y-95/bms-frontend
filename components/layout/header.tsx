import { ActionIcon, Avatar, Box, Flex, Group, Indicator } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";

export default function Header() {
  return (
    <Box>
      <Flex justify="right" align="center" gap="md">
        <Indicator color="red">
          <ActionIcon>
            <IconBell />
          </ActionIcon>
        </Indicator>

        <Avatar color="cyan" radius="xl">
          MK
        </Avatar>
      </Flex>
    </Box>
  );
}
