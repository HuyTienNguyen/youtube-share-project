import { EditOutlined, LikeOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const { Meta } = Card;
export interface CardVideoProps {
  title: string;
}

export default function CardVideo({ title }: CardVideoProps) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  console.log("check", isAuthenticated);
  return (
    <Card
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={
        isAuthenticated ? [<LikeOutlined />, <EditOutlined key="edit" />] : []
      }
    >
      <Meta title={title} />
    </Card>
  );
}
