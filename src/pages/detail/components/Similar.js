import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";
import { Swiper, SwiperSlide } from "swiper/react";
import { W500_URL } from "../../../constant/imgUrl";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 100px 0 0 ${spacing.side};

  img {
    border-radius: 10px;
  }

  @media screen and (max-width: 1024px) {
    padding: 70px 0 0 ${spacing.side};
  }
  @media screen and (max-width: 768px) {
    padding: 50px 0 0 ${spacing.moSide};

    img {
      border-radius: 20px;
    }
  }
`;
const Title = styled.h3`
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: 10px;
  }
`;

const params = {
  slidesPerView: 6.4,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 6.4,
    },
    640: {
      slidesPerView: 3.4,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 2.3,
      spaceBetween: 10,
    },
  },
};

export const Similar = ({ title, simData }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Swiper {...params}>
        {simData.map((sData) => (
          <SwiperSlide>
            <Link to={`/detail/${sData.id}`}>
              <img src={`${W500_URL}${sData.poster_path}`} alt={sData.title} />
              <MovieTitle>{sData.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
