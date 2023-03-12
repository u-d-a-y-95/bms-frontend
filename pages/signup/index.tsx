import { useState } from "react";
import {
  Stepper,
  Button,
  Group,
  TextInput,
  Title,
  Text,
  Grid,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Head from "next/head";
import styles from "./index.module.scss";

export default function Signup() {
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      company: {
        name: "",
        email: "",
        mobile: "",
      },
      employee: {
        name: "",
        mobile: "",
        password: "",
      },
    },
  });

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.left}> </div>
        <div className={styles.right}>
          <div className={styles.signup}>
            <Title align="center">Sign Up</Title>
            <Stepper
              active={active}
              my="xl"
              radius="sm"
              styles={{
                root: {
                  height: "280px",
                },
                stepIcon: {
                  width: "3rem",
                  height: "3rem",
                },
                stepDescription: {
                  width: "65px",
                  fontSize: ".65rem",
                },
              }}
            >
              <Stepper.Step
                label="First step"
                description="Company information"
              >
                <TextInput
                  label="Name"
                  placeholder="Username"
                  {...form.getInputProps("company.name")}
                />
                <TextInput
                  mt="md"
                  label="Email"
                  placeholder="Enter a email"
                  {...form.getInputProps("company.email")}
                />
              </Stepper.Step>
              <Stepper.Step label="Second step" description="Owner information">
                <TextInput
                  label="Name"
                  placeholder="Username"
                  {...form.getInputProps("company.name")}
                />
                <TextInput
                  mt="md"
                  label="Mobile"
                  placeholder="Enter a mobile number"
                  {...form.getInputProps("company.email")}
                />
                <TextInput
                  mt="md"
                  label="Password"
                  placeholder="Enter a password"
                  {...form.getInputProps("company.mobile")}
                />
              </Stepper.Step>
              <Stepper.Completed>
                <Grid h={"80%"} p="xl">
                  <Grid.Col span={6}>
                    <Title size="h5">Company Info</Title>
                    <Text fz="sm">Name</Text>
                    <Text fz="xs" c="dimmed">
                      Brain Stationsdbjshd sadvsdgsgdk sjdhsdh sjhdgsgd
                    </Text>
                    <Text fz="sm">Email</Text>
                    <Text fz="xs" c="dimmed">
                      uday.dev.bd@gmail.com
                    </Text>
                    <Text fz="sm">Mobile</Text>
                    <Text fz="xs" c="dimmed">
                      01964892201
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Title size="h5">Owner Info</Title>
                    <Text fz="sm">Name</Text>
                    <Text fz="xs" c="dimmed">
                      Saiful Islam uday
                    </Text>
                    <Text fz="sm">Email</Text>
                    <Text fz="xs" c="dimmed">
                      01964892201
                    </Text>
                    <Text fz="sm">Password</Text>
                    <Text fz="xs" c="dimmed">
                      *********
                    </Text>
                  </Grid.Col>
                </Grid>
              </Stepper.Completed>
            </Stepper>

            <Group position="right">
              {active !== 0 && (
                <Button variant="default" onClick={prevStep}>
                  Back
                </Button>
              )}
              {active !== 2 && <Button onClick={nextStep}>Next step</Button>}
              {active === 2 && <Button onClick={nextStep}>Procced</Button>}
            </Group>
          </div>
        </div>
      </div>
    </>
  );
}
