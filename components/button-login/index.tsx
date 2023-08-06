import * as React from "react";
import RButton from "../elements/button";

export interface IButtonLoginProps {}

export default function ButtonLogin(props: IButtonLoginProps) {
  return (
    <>
      <RButton type="primary"> Login </RButton>
    </>
  );
}
