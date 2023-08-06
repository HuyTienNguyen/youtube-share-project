import Menu from "../menu";
import style from "./style.module.scss";
import { Col, Row } from "antd";
import avatar from "../../images/logo.png";
import Image from "next/image";
import InputSearch from "../../components/home/input-search";
import ButtonLogin from "../../components/button-login";
import { ChangeEvent } from "react";
import { ListParams } from "../../store/common";

export interface HeaderProps {
  filter?: ListParams;
  onSearchChange?: (newFilter: ListParams) => void;
}
const Header = ({ filter, onSearchChange }: HeaderProps) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onSearchChange) return;
    const newFilter: ListParams = {
      ...filter,
      name_like: e.target.value,
      _page: 1,
    };
    onSearchChange(newFilter);
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
            <InputSearch onChange={handleSearchChange} />
          </div>
        </Col>
        <Col flex={2} className="gutter-row">
          <ButtonLogin />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
