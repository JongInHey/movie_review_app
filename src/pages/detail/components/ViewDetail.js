import { NOIMG_URL, W500_URL } from "../../../constant/imgUrl";
import {
  Container,
  CoverImg,
  ConWrap,
  Info,
  Genres,
  Desc,
  BgImg,
} from "./DetailStyle";

export const ViewDetail = ({ detailData }) => {
  return (
    <Container>
      <CoverImg
        src={
          detailData.poster_path === null ||
          detailData.poster_path === undefined
            ? NOIMG_URL
            : W500_URL + detailData.poster_path
        }
        alt={detailData.title}
      />
      <ConWrap>
        <h3>{detailData.title}</h3>
        <Info>
          <span> {detailData.release_date}</span>
          <span>{Math.round(detailData.vote_average * 100) / 100}점</span>
          <span>{detailData.runtime}분</span>
        </Info>

        {detailData.genres && (
          <Genres>
            {detailData.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </Genres>
        )}

        <Desc>
          <p>{detailData.overview}</p>
        </Desc>
      </ConWrap>
      <BgImg $bgimg={detailData.poster_path} />
    </Container>
  );
};
