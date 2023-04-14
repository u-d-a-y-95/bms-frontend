import { NavLink, Navbar } from "@mantine/core";
import {
  IconAddressBook,
  IconCalculator,
  IconLayoutDashboard,
  IconMessage,
  IconPaperBag,
  IconSettings,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";
import { useRouter } from "next/router";

const navs = [
  {
    label: "Dashboard",
    url: "/",
    icon: IconLayoutDashboard,
    children: [],
  },
  {
    label: "Customer Management",
    url: "",
    icon: IconUsers,
    children: [],
  },
  {
    label: "Bill Management",
    url: "",
    icon: IconCalculator,
    children: [],
  },
  {
    label: "Configuration",
    url: "",
    icon: IconSettings,
    children: [
      {
        label: "Profile",
        url: "",
        icon: IconUser,
      },
      {
        label: "Employee",
        url: "",
        icon: IconAddressBook,
      },
      {
        label: "Service",
        url: "",
        icon: IconPaperBag,
      },
      {
        label: "Sms",
        url: "",
        icon: IconMessage,
      },
    ],
  },
];

const Link = ({ items }: any) => {
  const router = useRouter();
  return (
    <>
      {items.map((item: any, index: number) => (
        <NavLink
          key={index}
          label={item.label}
          active={router.pathname === item.url}
          py={12}
          icon={<item.icon size="1rem" />}
        >
          {item?.children?.length && <Link items={item.children} />}
        </NavLink>
      ))}
    </>
  );
};

export default function Nav() {
  return (
    <Navbar
      width={{ sm: "100%", md: "300" }}
      hiddenBreakpoint="sm"
      // hidden={false}
    >
      {/* <Navbar.Section p={20}>
        <Title order={3} color="red">
          BMS
        </Title>
        <Text size={"sm"}>HTech Solution</Text>
      </Navbar.Section>
      <Divider /> */}
      <Navbar.Section grow mt={5}>
        <Link items={navs}></Link>
      </Navbar.Section>
      <Navbar.Section>{}</Navbar.Section>
    </Navbar>
  );
}
