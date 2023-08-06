import { Col, Pagination, Row } from "antd";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardVideo from "../card-video";
import style from "./style.module.scss";
import { getAllVideosRequest, setFilter } from "../../store/videos/slice";
import { RootState } from "../../store";

export interface IListVideoProps {}

export default function ListVideo(props: IListVideoProps) {
  const dispatch = useDispatch();
  const { videosList, filter, pagination } = useSelector(
    (state: RootState) => state.video
  );
  useEffect(() => {
    dispatch(getAllVideosRequest(filter));
    // eslint-disable-next-line
  }, [dispatch, filter]);
  const handlePageChange = (page: number) => {
    dispatch(setFilter({ ...filter, _page: page }));
  };
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {videosList &&
          videosList.map((e) => (
            <Fragment key={e.id}>
              <Col className={style.colStyle} xs={24} sm={12} md={8} lg={6}>
                <CardVideo title={e.name} />
              </Col>
            </Fragment>
          ))}
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          pageSize={pagination._limit}
          total={pagination._totalRows}
          current={pagination._page}
          onChange={handlePageChange}
        />
      </Row>
    </div>
  );
}
