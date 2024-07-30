import styled from "styled-components";
import { spacing } from "../../../GlobalStyled";

const SCategory = styled.div`
  width: 100%;
  padding: 50px 0 0 ${spacing.side};
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;

  button {
    all: unset;
    padding: 5px 15px 6px 15px;
    margin-right: 10px;
    margin-bottom: 5px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 30px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 768px) {
    padding: 50px 0 0 ${spacing.moSide};
    button {
      font-size: 14px;
      padding: 5px 10px 6px 10px;
      margin-right: 10px;
      margin-bottom: 15px;
      border: 0;
    }
  }
`;

export const Category = ({ genreListData, onSelectGenre }) => {
  return (
    <SCategory>
      <button onClick={() => onSelectGenre(null)}>All</button>
      {genreListData.map((genre) => (
        <div key={genre.id}>
          <button onClick={() => onSelectGenre(genre.id)}>#{genre.name}</button>
        </div>
      ))}
    </SCategory>
  );
};
