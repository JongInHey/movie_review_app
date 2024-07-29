import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";
import { Swiper, SwiperSlide } from "swiper/react";

const SCategory = styled.div`
  width: 100%;
  padding: 20px 0 0 ${spacing.side};

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    all: unset;
    width: 100%;
    padding: 5px 12px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 30px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const Category = ({ genreListData }) => {
  return (
    <SCategory>
      <Swiper spaceBetween={20} slidesPerView={12}>
        {genreListData.map((genre) => (
          <SwiperSlide key={genre.id}>
            <button>#{genre.name}</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </SCategory>
  );
};
