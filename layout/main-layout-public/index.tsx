import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../../hooks/use-debounce";
import { RootState } from "../../store";
import { getAllVideosRequest } from "../../store/videos/slice";
import FooterDesign from "../footer";
import Header from "../header";
import style from "./style.module.scss";

interface IProps {
  children: ReactElement;
}

const MainLayoutContainer = ({ children }: IProps) => {
  const [keyword, setKeyword] = useState<string>("");
  const searchDebouceValue = useDebounce(keyword, 300);
  const dispatch = useDispatch();
  const { filter } = useSelector((state: RootState) => state.video);
  useEffect(() => {
    dispatch(
      getAllVideosRequest({
        ...filter,
        name_like: searchDebouceValue?.trim(),
        _page: 1,
      })
    );
  }, [dispatch, filter, searchDebouceValue]);

  return (
    <main className={style.mainLayout}>
      <Header keyword={keyword} onChangeKeyword={setKeyword} />
      <div className={style.content}> {children}</div>
      <FooterDesign />
    </main>
  );
};

export default MainLayoutContainer;
