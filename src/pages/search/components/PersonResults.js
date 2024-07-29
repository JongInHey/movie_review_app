import styled from "styled-components";
import { Loading } from "../../../components/Loading";
import { NOIMG_URL, W500_URL } from "../../../constant/imgUrl";
import { Link } from "react-router-dom";

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 15px;
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
  }

  @media screen and (max-width: 768px) {
    row-gap: 15px;
  }
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 450px;
  img {
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    height: 215px;
  }
`;

const Name = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 15px;
  }
`;

export const PersonResults = ({ isLoading, personData }) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {personData.map((perdata) => (
            <div key={perdata.id}>
              <Name>{perdata.name}</Name>
              <ConWrap>
                {perdata.known_for.map((data) => (
                  <Con key={data.id}>
                    <Link to={`/detail/${data.id}`}>
                      <Bg>
                        <img
                          src={
                            data.poster_path === null
                              ? NOIMG_URL
                              : W500_URL + data.poster_path
                          }
                          alt={data.title}
                        />
                      </Bg>
                    </Link>
                  </Con>
                ))}
              </ConWrap>
            </div>
          ))}
        </>
      )}
    </>
  );
};
