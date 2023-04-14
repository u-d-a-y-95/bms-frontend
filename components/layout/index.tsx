import { Aside, Group, NavLink } from "@mantine/core";
import { AppShell, Navbar } from "@mantine/core";
import Nav from "./nav";
import Header from "./header";

const Layout = ({ children }: any) => {
  return (
    <AppShell navbarOffsetBreakpoint="sm" navbar={<Nav />}>
      <Header></Header>
      {children}
    </AppShell>
  );
};

export default Layout;
