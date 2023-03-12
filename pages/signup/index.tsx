import Head from "next/head";
import { Signup } from "@/components/signup";

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <Signup />
    </>
  );
}
