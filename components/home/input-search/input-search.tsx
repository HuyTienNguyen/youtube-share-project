import Search from "antd/es/input/Search";
import * as React from "react";

export interface InputSearchProps {}

export default function InputSearch(props: InputSearchProps) {
  return (
    <div>
      <Search placeholder="input search text" enterButton />
    </div>
  );
}
