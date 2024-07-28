import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { movieList, nowPlaying, popular, topRated, upcoming } from "../../api";

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

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <PageTitle titleName={"Home"} />
      Home
    </>
  );
};
