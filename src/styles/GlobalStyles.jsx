import { createGlobalStyle } from "styled-components";


const GlobalStyles= createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

:root {
    --blackColor: #0b0c10 ;
    --blueText: #66FCF1;
    --blueText2: #d2e9e7;
    --blueText3: #abe6e1;
    --blue4:#1F2833;
    --whiteColor: #ffffff;
    --greyColor: #C5C6C7;
    --greyColor2: #999b9c;
    /* Add more variables as needed */
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
  }


h1, h2, h3, h4, h5, h6 {
    
    font-weight: 700; /* Bold font weight for headings */
    margin: 0 0 20px 0; /* Optional: Set a default margin for headings */
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400; /* Normal font weight for paragraphs */
    line-height: 1.6; /* Optional: Set a line-height for better readability */
    margin: 0 0 20px 0; /* Optional: Set a default margin for paragraphs */
  }

img{
    max-width: 100%;
}

`

export default GlobalStyles;