import * as React from "react";
import { Pagination as PaginationAntd } from "antd";
import type { PaginationProps } from "antd";

export interface IPaginationProps {}

export default function Pagination(props: IPaginationProps) {
  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    console.log(current, pageSize);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <PaginationAntd defaultCurrent={1} total={50} />
    </div>
  );
}
