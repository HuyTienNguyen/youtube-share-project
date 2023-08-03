import Menu from "../menu";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import avatar from "@/images/logo.png";
import Image from "next/image";
const Header = () => {
  return (
    <div className={style.header}>
      <Row gutter={30} align="middle">
        <Col flex={2} className="gutter-row">
          <div>
            <Image
              src={avatar}
              alt="avatar"
              width={150}
              height={50}
            />
          </div>
        </Col>
        <Col flex={4} className="gutter-row">
          <div>
            <Menu />
          </div>
        </Col>
        <Col flex={2} className="gutter-row">
          Logout
        </Col>
      </Row>
    </div>
  );
};

export default Header;
