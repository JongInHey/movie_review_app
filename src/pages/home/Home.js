import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { movieList, nowPlaying, popular, topRated, upcoming } from "../../api";
import { Loading } from "../../components/Loading";
import "swiper/css";
import { Movies } from "./components/Movies";
import { Category } from "./components/Category";
import { MainBanner } from "./components/MainBanner";

export const Home = () => {
  const [genreListData, setGenreListData] = useState();
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [randomIndex, setRandomIndex] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { genres } = await movieList();
        const { results: nowResult } = await nowPlaying();
        const { results: popResult } = await popular();
        const { results: topResult } = await topRated();
        const { results: upResult } = await upcoming();

        setGenreListData(genres);
        setNowData(nowResult);
        setPopData(popResult);
        setTopData(topResult);
        setUpData(upResult);

        const randomIdx = Math.floor(Math.random() * nowResult.length);
        setRandomIndex(randomIdx);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSelect = (genreId) => {
    setSelectedGenre(genreId);
  };

  const filterMoviesByGenre = (movies) => {
    if (!selectedGenre) return movies;
    return movies.filter((movie) => movie.genre_ids.includes(selectedGenre));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle titleName={"Home"} />
          <MainBanner bannerData={nowData[randomIndex]} />

          <Category
            genreListData={genreListData}
            onSelectGenre={handleSelect}
          />

          <Movies
            title={"현재 상영 영화"}
            movieData={filterMoviesByGenre(nowData)}
          />
          <Movies
            title={"현재 인기 영화"}
            movieData={filterMoviesByGenre(popData)}
          />
          <Movies
            title={"최고 평점 영화"}
            movieData={filterMoviesByGenre(topData)}
          />
          <Movies
            title={"개봉 예정 영화"}
            movieData={filterMoviesByGenre(upData)}
          />
        </>
      )}
    </>
  );
};
