import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { searchMovie, searchPerson } from "../../api";

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [personData, setpersonData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: searchResults } = await searchMovie("인사이드");
        const { results: personResults } = await searchPerson("정우");
        setSearchData(searchResults);
        setpersonData(personResults);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(searchData);
  console.log(personData);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <PageTitle titleName={"Search"} />
      Search
    </>
  );
};
