import styled from "styled-components";
import { colors, spacing } from "../../../GlobalStyled";

const SCategory = styled.div`
  width: 100%;
  padding: 50px 0 0 ${spacing.side};
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 50px 0 0 ${spacing.moSide};
  }
`;

const Button = styled.button`
  all: unset;
  padding: 5px 15px 6px 15px;
  margin-right: 10px;
  margin-bottom: 5px;
  text-align: center;
  background-color: ${(props) =>
    props.$isSelected ? `${colors.point}` : "rgba(255, 255, 255, 0.2)"};
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 5px 10px 6px 10px;
    margin-bottom: 15px;
    border: 0;
  }
`;

export const Category = ({ genreListData, onSelectGenre, selectedGenre }) => {
  return (
    <SCategory>
      <Button
        onClick={() => onSelectGenre(null)}
        $isSelected={selectedGenre === null}
      >
        All
      </Button>
      {genreListData.map((genre) => (
        <div key={genre.id}>
          <Button
            onClick={() => onSelectGenre(genre.id)}
            $isSelected={selectedGenre === genre.id}
          >
            #{genre.name}
          </Button>
        </div>
      ))}
    </SCategory>
  );
};
