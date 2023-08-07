import * as React from "react";
import RButton from "../elements/button";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/auth/slice";
import { useRouter } from "next/router";

export interface IButtonLoginProps {}

export default function ButtonLogout(props: IButtonLoginProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(signOut());
    router.push("/");
  };
  return (
    <>
      <RButton type="primary" onClick={handleLogout}>
        Logout
      </RButton>
    </>
  );
}
