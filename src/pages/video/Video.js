// src/pages/Video.js
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Videos } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { colors, spacing } from "../../GlobalStyled";

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
    padding: 100px ${spacing.moSide};
    row-gap: 10px;
  }
`;

const ErrorMessage = styled.h3`
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  padding: 100px ${spacing.side};
  color: ${colors.point};

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Video = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoData, setVideoData] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const { id: movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { results: videoResults } = await Videos(movieId);
        const trailer = videoResults.find((video) => video.type === "Trailer");

        if (trailer) {
          setVideoUrl(`https://www.youtube.com/embed/${trailer.key}`);
        }

        setVideoData(videoResults);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  // console.log(videoData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {videoUrl ? (
            <Container>
              {videoData.map((video) => (
                <div key={video.id}>
                  <iframe
                    width="100%"
                    height="450"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
                  ></iframe>
                </div>
              ))}
            </Container>
          ) : (
            <ErrorMessage>예고편이 없습니다...😂</ErrorMessage>
          )}
        </>
      )}
    </>
  );
};
