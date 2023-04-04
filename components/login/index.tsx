import { Button, Group, TextInput, Title, PasswordInput } from "@mantine/core";
import { Form, useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import styles from "./index.module.scss";
import { useLogin } from "@/hooks/apis/auth";

const schema = z.object({
  mobile: z.string().regex(/^(?:\+8801|01)[3-9]\d{8}$/),
  password: z.string().nonempty().min(5, "At least 5 charecter needs"),
});

export const Login = () => {
  const { mutate: save, isLoading } = useLogin();
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      mobile: "",
      password: "",
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = () => {
    save(form.values);
  };

  return (
    <div className={styles.main}>
      <div className={styles.left}> </div>
      <div className={styles.right}>
        <div className={styles.signup}>
          <Title align="center">Login</Title>
          <Form form={form} onSubmit={handleSubmit}>
            <TextInput
              mt="xs"
              label="Mobile"
              placeholder="Enter a mobile number"
              {...form.getInputProps("mobile")}
            />
            <PasswordInput
              my="xs"
              label="Password"
              placeholder="Enter a password"
              {...form.getInputProps("password")}
            />
            <Group position="right">
              <Button type="submit" loading={isLoading}>
                submit
              </Button>
            </Group>
          </Form>
        </div>
      </div>
    </div>
  );
};
