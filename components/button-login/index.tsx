import * as React from "react";
import RButton from "../elements/button";
import { useRouter } from "next/router";

export default function ButtonLogin() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <>
      <RButton type="primary" onClick={handleLogin}>
        Login
      </RButton>
    </>
  );
}
