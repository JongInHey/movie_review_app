import { useForm } from "react-hook-form";
import { useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { searchMovie, searchPerson } from "../../api";
import styled from "styled-components";
import { spacing } from "../../GlobalStyled";
import { SearchForm } from "./components/SearchForm";
import { SearchResults } from "./components/SearchResults";
import { PersonResults } from "./components/PersonResults";
import { ErrorMessage } from "./components/ErrorMessage";

const Container = styled.div`
  padding: 150px ${spacing.side};

  @media screen and (max-width: 768px) {
    padding: 100px ${spacing.moSide};
  }
`;

const SearchMessage = styled.h3`
  font-size: 18px;
  margin-top: 20px;
  color: lightgreen;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [personData, setpersonData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [keyData, setKeyData] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
    try {
      const { results: searchResult } = await searchMovie(keyword);
      const { results: personResults } = await searchPerson(keyword);

      setSearchData(searchResult);
      setpersonData(personResults);
      setKeyData(keyword);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const nullKeyword = watch("keyword");

  // console.log(searchData);
  // console.log(personData);
  // console.log(nullKeyword);

  const formProps = {
    onSearchResult: handleSubmit(onSearchResult),
    register,
    errors,
  };

  return (
    <>
      <Container>
        <PageTitle titleName={"Search"} />
        <SearchForm {...formProps} />

        {nullKeyword && searchData?.length === 0 && personData?.length === 0 ? (
          <>
            <ErrorMessage message={"일치하는 검색 결과가 없습니다..!"} />
            <ErrorMessage
              message={`검색할 제목을 입력 후 엔터를 눌러주세요..!(●'◡'●)`}
            />
          </>
        ) : (
          <>
            {searchData && (
              <>
                <SearchMessage>
                  {keyData + " 검색 결과 입니다 OwO"}
                </SearchMessage>
                <SearchResults isLoading={isLoading} searchData={searchData} />
              </>
            )}
            {personData && (
              <PersonResults isLoading={isLoading} personData={personData} />
            )}
          </>
        )}
      </Container>
    </>
  );
};
