import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { movieDetail, recommendations, similar, Videos } from "../../api";
import { useParams } from "react-router-dom";

export const Detail = () => {
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
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(detailData);
  // console.log(recommendData);
  // console.log(similarData);
  console.log(videoData);

  return (
    <>
      <PageTitle titleName={"Detail"} />
      Detail
    </>
  );
};
