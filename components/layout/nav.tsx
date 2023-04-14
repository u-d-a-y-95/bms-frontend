import { Divider, NavLink, Navbar, Text, Title } from "@mantine/core";
import { useRouter } from "next/router";

const navs = [
  {
    label: "Dashboard",
    url: "/",
    children: [],
  },
  {
    label: "Customer Management",
    url: "",
    children: [],
  },
  {
    label: "Bill Management",
    url: "",
    children: [],
  },
  {
    label: "Configuration",
    url: "",
    children: [
      {
        label: "Profile",
        url: "",
      },
      {
        label: "Employee",
        url: "",
      },
      {
        label: "Service",
        url: "",
      },
      {
        label: "Sms",
        url: "",
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
      <Navbar.Section p={20}>
        <Title order={3} color="red">
          BMS
        </Title>
        <Text size={"sm"}>HTech Solution</Text>
      </Navbar.Section>
      <Divider />
      <Navbar.Section grow mt={5}>
        <Link items={navs}></Link>
      </Navbar.Section>
      <Navbar.Section>{}</Navbar.Section>
    </Navbar>
  );
}
