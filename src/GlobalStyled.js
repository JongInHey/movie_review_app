import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "#ff5858",
};

export const spacing = {
  side: "100px",
  taside: "50px",
  moSide: "20px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body {
        font-family: "Noto Sans KR", sans-serif;
        background-color: #252525;
        color: white;
        letter-spacing: -1px;
        word-break: keep-all;
    }

    img {
      width: 100%;
      display: block;
    }

    a {
        text-decoration: none;
        color: white;
    }
`;
