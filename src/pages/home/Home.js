import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { movieList, nowPlaying, popular, topRated, upcoming } from "../../api";
import { Loading } from "../../components/Loading";

import "swiper/css";

import { Movies } from "./components/Movies";
import { Category } from "./components/Category";
import { MainBanner } from "./components/MainBanner";

export const Home = () => {
  const [genreListData, setgenreListData] = useState();
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { genres } = await movieList();
        const { results: nowResult } = await nowPlaying();
        const { results: popResult } = await popular();
        const { results: topResult } = await topRated();
        const { results: upResult } = await upcoming();
        setgenreListData(genres);
        setNowData(nowResult);
        setPopData(popResult);
        setTopData(topResult);
        setUpData(upResult);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(genreListData);
  console.log(nowData);
  // console.log(popData);
  // console.log(topData);
  // console.log(upData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle titleName={"Home"} />
          <MainBanner bannerData={nowData[0]} />

          <Category genreListData={genreListData} />

          <Movies title={"현재 상영 영화"} movieData={nowData} />
          <Movies title={"현재 인기 영화"} movieData={popData} />
          <Movies title={"최고 평점 영화"} movieData={topData} />
          <Movies title={"개봉 예정 영화"} movieData={upData} />
        </>
      )}
    </>
  );
};
