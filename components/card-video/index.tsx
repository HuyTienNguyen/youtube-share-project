import { EditOutlined, LikeOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Cookies } from "react-cookie";
import { useEffect } from "react";

const { Meta } = Card;
export interface CardVideoProps {
  title: string;
}

export default function CardVideo({ title }: CardVideoProps) {
  return (
    <Card
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={false ? [<LikeOutlined />, <EditOutlined key="edit" />] : []}
    >
      <Meta title={title} />
    </Card>
  );
}
