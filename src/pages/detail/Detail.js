import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { movieDetail, recommendations, similar, Videos } from "../../api";
import { useParams } from "react-router-dom";
import { ViewDetail } from "./components/ViewDetail";
import { Loading } from "../../components/Loading";
import { Similar } from "./components/Similar";

export const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [detailData, setDetailData] = useState();
  const [recommendData, setRecommendData] = useState();
  const [similarData, setSimilarData] = useState();
  const [videoData, setVideoData] = useState();
  const { id: movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(movieId);
        const { results: recoResults } = await recommendations(movieId);
        const { results: simResults } = await similar(movieId);
        const { results: videoResults } = await Videos(movieId);

        setDetailData(data);
        setRecommendData(recoResults);
        setSimilarData(simResults);
        setVideoData(videoResults);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  console.log(detailData);
  // console.log(recommendData);
  // console.log(similarData);
  console.log(videoData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle titleName={"Detail"} />
          <ViewDetail detailData={detailData} />

          <Similar title={"추천 영화"} simData={recommendData} />
          <Similar title={"장르 & 키워드 유사한 영화"} simData={similarData} />
        </>
      )}
    </>
  );
};
