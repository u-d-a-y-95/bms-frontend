import { ActionIcon, Avatar, Box, Flex, Group, Indicator } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";
import UserSetting from "./userSetting";

export default function Header() {
  return (
    <Box>
      <Flex justify="right" align="center" gap="md" pr="md">
        <Indicator color="red">
          <ActionIcon>
            <IconBell />
          </ActionIcon>
        </Indicator>

        <UserSetting />
      </Flex>
    </Box>
  );
}
