import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

* {
margin: 0;
padding: 0;
box-sizing: border-box;
outline: none;
scroll-behavior: smooth; 
font-family: 'Nunito', sans-serif;
}
body {
  background: ${({theme})=> theme.colors["base-white"]};
 -webkit-font-smoothing: antialiased;
 
 } 
button {
     cursor: pointer;
 }
 a {
     text-decoration: none;
 }

`