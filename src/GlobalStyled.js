import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body {
        font-family: "Noto Sans KR", sans-serif;
        background-color: #252525;
        color: white;
    }

    a {
        text-decoration: none;
        color: white;
    }
`;
