import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { movieDetail, recommendations, similar } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { ViewDetail } from "./components/ViewDetail";
import { Loading } from "../../components/Loading";
import { Similar } from "./components/Similar";
import styled from "styled-components";
import { colors } from "../../GlobalStyled";

const Trailer = styled.button`
  all: unset;
  display: block;
  margin: 20px auto 0;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
  background: linear-gradient(135deg, ${colors.point}, #ff9898);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  z-index: 98;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;

export const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [detailData, setDetailData] = useState();
  const [recommendData, setRecommendData] = useState();
  const [similarData, setSimilarData] = useState();
  const { id: movieId } = useParams();
  const navi = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(movieId);
        const { results: recoResults } = await recommendations(movieId);
        const { results: simResults } = await similar(movieId);

        setDetailData(data);
        setRecommendData(recoResults);
        setSimilarData(simResults);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  // console.log(detailData);
  // console.log(recommendData);
  // console.log(similarData);

  const handleWatchTrailer = () => {
    navi(`/video/${movieId}`);
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle titleName={"Detail"} />
          <ViewDetail detailData={detailData} />
          <Trailer onClick={handleWatchTrailer}>예고편 보러가기</Trailer>

          <Similar title={"추천 영화"} simData={recommendData} />
          <Similar title={"장르 & 키워드 유사한 영화"} simData={similarData} />
        </>
      )}
    </>
  );
};
