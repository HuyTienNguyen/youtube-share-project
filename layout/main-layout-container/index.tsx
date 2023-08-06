import { ReactElement, useEffect, useState } from "react";
import style from "./style.module.scss";
import Header from "../header";
import FooterDesign from "../footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getAllVideosRequest } from "../../store/videos/slice";
import { ListParams } from "../../store/common";
import useDebounce from "../../hooks/use-debounce";

interface IProps {
  children: ReactElement;
}

const MainLayoutContainer = ({ children }: IProps) => {
  const [keyword, setKeyword] = useState<string>("");
  const searchDebouceValue = useDebounce(keyword, 300);
  const dispatch = useDispatch();
  const { filter } = useSelector((state: RootState) => state.video);
  const handleSearchChange = (newFilter: ListParams) => {
    dispatch(getAllVideosRequest(newFilter));
  };
  return (
    <main className={style.mainLayout}>
      <Header filter={filter} onSearchChange={handleSearchChange} />
      <div className={style.content}> {children}</div>
      <FooterDesign />
    </main>
  );
};

export default MainLayoutContainer;
