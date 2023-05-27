import styled from "styled-components";

export const HeaderContainer = styled.header`
 max-width: 1940px;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 background-image: url("https://pages.trip.com/images/home-background/head-banner-bg-new-1920.webp");
 background-repeat: no-repeat;
 background-size: cover;
` 

export const ListContainer = styled.a`
display: flex;
align-items: center;
justify-content: space-around;

> div {
    position: relative;
    line-height: 1.5;
    padding: 0 32px;

ul {
outline: none;
text-decoration: none;
display: flex;
align-items: center;
justify-content: space-around;
}

li {
 position: relative;
 display: flex;
 align-items: center;
 justify-content: space-between;

 h1 {
color: ${({theme})=> theme.colors["base-white"]};
 }
}
}
a {
color: inherit;
padding: 0.5rem;
margin: 2.4rem;
font-size: 20px;
font-family: Nunito;
background-color: transparent;
color: #fff;



}
button {
width: 140px;
float: left;
margin: 16px 4px;
height: 34px;
line-height: 18px;
box-sizing: border-box;
font-size: 14px;
border: 5px;
cursor: pointer;
color: #0f294d;
border-radius: 4px;
font-weight: 400;
} 
button:hover {
background: #FFFAF4;
}
a:hover {
color: ${({theme})=> theme.colors["base-cinza"]}; 
}

` 
