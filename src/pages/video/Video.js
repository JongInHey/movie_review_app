// src/pages/Video.js
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Videos } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { colors, spacing } from "../../GlobalStyled";
import { useScrollTop } from "../../lib/useScrollTop";

const Container = styled.section`
  padding: 100px ${spacing.side};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;

  div {
    position: relative;
    width: 100%;
    padding-bottom: 55%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 15px;
  }

  @media screen and (max-width: 768px) {
    padding: 100px ${spacing.moSide} 0;
    row-gap: 10px;
  }
`;

const BackBtn = styled.button`
  all: unset;
  display: block;
  margin: 30px auto 0;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
  background: linear-gradient(135deg, ${colors.point}, ${colors.gradient});
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

export const Video = () => {
  useScrollTop();
  const [isLoading, setIsLoading] = useState(true);
  const [videoData, setVideoData] = useState();
  const { id: movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { results: videoResults } = await Videos(movieId);

        setVideoData(videoResults);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  console.log(videoData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Container>
            {videoData.map((video) => (
              <div key={video.id}>
                <iframe
                  width="100%"
                  height="450"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </Container>
          <BackBtn>
            <Link to={`/detail/${movieId}`}>상세페이지로 돌아가기</Link>
          </BackBtn>
        </>
      )}
    </>
  );
};
