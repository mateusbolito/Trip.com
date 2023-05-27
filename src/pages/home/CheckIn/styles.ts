import styled from "styled-components";

export const ContainerImg = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
` 
export const SloganSearch = styled.div`
margin-left: 32px;
margin-right: 32px;

> div {

margin-bottom: 0;
position: static;
}
` 

export const SloganContent = styled.div`
margin-top: 2.5rem;
color: #000;
font-size: 36px;
font-weight: 700;
line-height: 52px;
text-shadow: none;
overflow: hidden;
text-overflow: ellipsis;
 display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
word-break: break-word;
text-align: center;
`
export const MetodosPayment = styled.div`
display: flex;
margin: 16px;
align-items: center;
justify-content: center;

> div {
display: flex;
align-items: center;
overflow: hidden;
}
`
export const TextContainer = styled.div`
display: flex;
flex-direction: column;
flex-shrink: 1;
overflow: hidden;

span {
color: #0f294d;
font-size: 14px;
font-weight: 700;
line-height: 18px;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
}
`
export const SimpleText = styled.div`
display: flex;
align-items: center;
overflow: hidden;

> div {
display: flex;
flex-direction: column;
flex-shrink: 1;
overflow: hidden;
padding-left: 3.4rem;
span {
color: #0f294d;
font-size: 14px;
font-weight: 700;
line-height: 18px;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;

}
}

` 
export const BoxContainer = styled.div`
position: relative;
padding-top: 40px;

> div {
position: relative;
margin-top: -23px;
top: 23px;
display: flex;
justify-content: center;
z-index: 1;

ul {
height: 80px;
background: rgba(15,41,77,.8);
-webkit-backdrop-filter: blur(6px);
backdrop-filter: blur(6px);
display: flex;
justify-content: center;
border-radius: 46px;
position: relative;
z-index: 2;
padding: 7px;
list-style: none;

li {
padding: 4px 16px;
height: 40px;
border-radius: 24px;
line-height: normal;
color: #fff;
cursor: pointer;

svg {
margin-right: 0;
font-size: 20px;
position: static;
line-height: normal;
}
span {
margin-top: -1rem;
display: block;
font-size: 12px;
height: 16px;
line-height: 16px;
font-weight: 600;
margin-top: 2px;
}
}
}
}

`
export const BoxForm = styled.div`
height: 250px;
min-height: 160px;
border-radius: 10px;
padding-top: 32px;
display: flex;
align-items: center;
justify-content: center;
background: #0039a6;
`
export const IstanceBox = styled.div`
border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
`
export const BoxWrapper = styled.div`
width: 100%;
min-width: 704px;
margin: 0 auto;
padding: 24px;
background: #fff;
box-sizing: border-box;
border-radius: 8px;


ul {
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
padding-inline-start: 40px;
list-style: none;
li {
height: 56px;
border-radius: 4px 4px 4px 4px;
border: 1px solid #dadfe6;

> div {
position: relative;
width: 100%;
height: 100%;
}
}
}

`

export const SearchBoxContent = styled.div`
position: relative;
height: calc(100% - 2px);
display: flex;
margin: 0 16px;
width: calc(100% - 32px);

label {
position: absolute;
top: 8px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
max-width: calc(100% - 16px);
color: #8592a6;

}
` 
export const DestinyContent = styled.div`
width: 100%;
height: 100%;

input {
box-sizing: border-box;
height: 100%;
padding: 26px 0 0;
width: 100%;
border: none;
border-bottom: 2px solid transparent;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-weight: 700;
}
`  

export const CalendarContainer = styled.li`
width: 60%;


`
export const ContainerCalendarItem = styled.div`
display: inline-flex;
justify-content: space-between;
position: relative;
width: 100%;
height: 100%;

> div {

top: 0;
left: 0;

}
span {
margin-top: 2px;
margin-left: 16px;
font-size: 14px;
letter-spacing: 0;
text-align: left;
line-height: 18px;
-webkit-user-select: none;
-moz-user-select: none;
user-select: none;
display: inline-block;
color: #8592a6;

}

input {    
font-weight: 700;
font-size: 14px;
letter-spacing: 0;
text-align: left;
line-height: 22px;
padding: 1px;
margin-left: 12px;
padding: 10px 0 0;
border: none;
overflow: hidden;
}
::placeholder {
color: #0f294d !important;
}
`
export const NigthContainer = styled.div`
position: absolute;
font-size: 14px;
color: #0f294d;
line-height: 18px;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
z-index: 3;
-webkit-user-select: none;
-moz-user-select: none;
user-select: none;

span {
font-size: 14px;
color: #0f294d;
line-height: 18px;
}
`
export const CheckoutContainer = styled.div`
top: 0;
left: 0;

span {
    font-size: 12px;
    letter-spacing: 0;
    text-align: left;
    line-height: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    display: inline-block;
    color: #8592a6;
    
}


`
export const ButtonContent = styled.button`
background: #3264ff;
width: 80px;
height: 30px;
border-radius: 10px;
display: inline-flex;
align-items: center;
justify-content: center;
color: #fff;
border: none;
cursor: pointer;
margin: 20px;
`