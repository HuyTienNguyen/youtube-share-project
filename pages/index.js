import MainLayoutContainer from "../layout/main-layout-container";
import CardVideo from "../components/card-video";
import ListVideo from "../components/list-video";
import Pagination from "../components/pagination";

export default function Home() {
  return (
    <MainLayoutContainer>
      <h1>hello</h1>
      <ListVideo />
    </MainLayoutContainer>
  );
}
