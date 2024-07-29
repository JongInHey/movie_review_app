import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { W500_URL } from "../../../constant/imgUrl";
import { spacing } from "../../../GlobalStyled";

const Section = styled.section`
  padding: 100px 0 0 ${spacing.side};
`;
const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const Movies = ({ title, movieData }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Swiper spaceBetween={20} slidesPerView={6.4}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <img src={`${W500_URL}${data.poster_path}`} alt={data.title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
