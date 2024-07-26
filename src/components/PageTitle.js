import { Helmet } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
  return (
    <Helmet>
      <title>Movie_App | {titleName} </title>
    </Helmet>
  );
};
