import { Col, Row } from "antd";
import Image from "next/image";
import ButtonLogin from "../../components/button-login";
import InputSearch from "../../components/home/input-search";
import avatar from "../../images/logo.png";
import style from "./style.module.scss";
import { ChangeEvent } from "react";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import ButtonLogout from "../../components/button-logout";

export interface HeaderProps {
  keyword: string;
  onChangeKeyword: (value: string) => void;
}
const Header = ({ keyword, onChangeKeyword }: HeaderProps) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e.target.value;
    onChangeKeyword(newKeyword);
  };
  return (
    <div className={style.header}>
      <Row gutter={30} align="middle">
        <Col flex={2} className="gutter-row">
          <div>
            <Image src={avatar} alt="avatar" width={150} height={50} />
          </div>
        </Col>
        <Col flex={4} className="gutter-row">
          <div>
            <InputSearch onChange={handleChange} value={keyword} />
          </div>
        </Col>
        <Col flex={2} className="gutter-row">
          {!isAuthenticated ? <ButtonLogin /> : <ButtonLogout />}
        </Col>
      </Row>
    </div>
  );
};

export default Header;
