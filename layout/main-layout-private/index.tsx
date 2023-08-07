import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import style from "./style.module.scss";
import useDebounce from "../../hooks/use-debounce";
import { getAllVideosRequest } from "../../store/videos/slice";
import Header from "../header";
import FooterDesign from "../footer";
import { useRouter } from "next/router";

interface IProps {
  children: ReactElement;
}

export default function MainLayoutPivate({ children }: IProps) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const searchDebouceValue = useDebounce(keyword, 300);
  const dispatch = useDispatch();
  const { filter } = useSelector((state: RootState) => state.video);
  console.log("check", isAuthenticated);
  //   useEffect(() => {
  //     isAuthenticated ?
  //     dispatch(
  //       getAllVideosRequest({
  //         ...filter,
  //         name_like: searchDebouceValue?.trim(),
  //         _page: 1,
  //       })
  //     ) : router.push("/login");
  //   }, [dispatch, filter, searchDebouceValue]);
  return (
    <main className={style.mainLayout}>
      <Header keyword={keyword} onChangeKeyword={setKeyword} />
      <div className={style.content}> {children}</div>
      <FooterDesign />
    </main>
  );
}
