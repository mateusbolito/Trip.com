import styled from "styled-components";

export const AppContainer = styled.div`
width: 100%;
height: 550px;
background: url("https://pages.trip.com/images/online-adu/bg_2.webp") 50% no-repeat;
background-size: cover;
margin: 0;
padding: 0;
margin-top: 200px;

`
export const AppCenter = styled.div`
display: flex;
justify-content: flex-start;
overflow: hidden;
width: 1024px;
margin: 0 auto;
box-sizing: border-box;
padding: 80px 0;
position: relative;
`
export const MobileContainer = styled.div`
margin-right: 66px;
overflow: hidden;
height: 470px;
`
export const MobileContent = styled.div`
background-image: url("https://pages.trip.com/images/app-download/screenshot/pt-br-phone.jpg");
height: 605px;
width: 248px;
background-repeat: no-repeat;
background-size: 100%;
background-color: #e7ebf0;
border-radius: 48px;
position: relative;
box-shadow: -8px 8px 24px rgba(69,88,115,.32), inset 0 0 8px rgba(133,146,166,.5);
border: 14px solid #e7ebf0;
box-sizing: content-box;

`
export const AppLoad = styled.div`
flex: 1 1;
width: 682px;
height: 470px;

h1 {
font-weight: 700;
font-size: 36px;
line-height: 40px;
margin-bottom: 20px;
color: #fff;
}
`
export const ReserveTitle = styled.h2`
font-size: 18px;
color: #fff;
line-height: 22px;
margin-bottom: 25px;
`
export const SmsLayout = styled.div`
width: 682px;
height: 166px;
` 
export const SmsContent = styled.div`
display: flex;
`
export const OnlineAuto = styled.div`
flex: 1 1 auto;

> div {
display: flex;
flex-direction: column;


ul {
display: flex;
height: 26px;


li {
box-sizing: border-box;
border: 1px solid transparent;
border-radius: 4px;
padding: 5px 12px;
height: 100%;
color: #fff;
font-size: 14px;
font-weight: 700;
white-space: nowrap;
line-height: 1;
cursor: pointer;
list-style: none;
border-color: #fff;
margin: 10px;
}
}
}
`
export const MensageText = styled.div`
margin-top: 20px;
color: #fff;
font-size: 12px;
font-weight: 400;
line-height: 16px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-box-orient: vertical;
line-clamp: 2;
-webkit-line-clamp: 2;
word-break: break-word;
`
export const InputContent = styled.div`
-webkit-margin-start: 4px;
margin-inline-start: 4px;
border: none;
color: #0f294d;
flex: 1 1 auto;
display: flex;
align-items: center;

input {
width: 450px;
font-size: 14px;
margin-top: 20px;
height: 42px;
line-height: 22px;
outline-style: none;
border: none;
padding: 2px 10px 0;
background: ${({theme})=> theme.colors["base-white3"]};
font-weight: 700;
border-radius: 5px;

::placeholder {
color: #0f294d;
}
}


`
export const ButtonContainer = styled.div`
margin-top: 8px;

button {
position: relative;
width: 450px;
border: none;
box-sizing: border-box;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
outline: 0;
text-align: center;
white-space: nowrap;
background-color: #3264ff;
padding: 0 16px;
font-size: 16px;
line-height: 40px;
cursor: pointer;
color: #fff;
border-radius: 4px;
margin-left: 3px;
}

button:hover {
background: #34c;
}
`

