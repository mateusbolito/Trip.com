import styled from "styled-components";

export const ContainerPage = styled.div`
width: 1200px;
height: 300px;
margin-top: 75px;
margin-left: 350px;
`

export const TitleHotel = styled.div`
margin: 0 auto;
margin-bottom: 16px;
max-width: 1160px;
padding: 0 20px;

h1 {
position: relative;
display: inline-block;
font-size: 48px;
color: #0f294d;
line-height: 1;
}
`

export const HotelContainerSearch = styled.div`
max-width: 1160px;
margin: 0 auto;
padding: 0 20px 20px;
`
export const ContentWrap = styled.div`
position: relative;
transition: all ease 0.3s;
box-shadow: 0px 12px 24px 0px rgba(8,38,110,0.24);
`
export const SearchDestiny = styled.div`
border-radius: 8px;
margin: 0 auto;
padding: 24px 16px;
background: #fff;
box-sizing: border-box;

ul {
display: flex;
width: 1028px;
height: 80px;
list-style: none;

li {
width: 100%;
margin-bottom: 8px;
margin-right: 0px;
}
}
`
export const ContainerLiDiv = styled.div`
position: relative;
width: 100%;
height: 100%;
border-radius: 4px;
`
export const DestinyContent = styled.div`
border-radius: 4px;
position: relative;
width: calc(100% - 32px);
height: 100%;
margin: 0 16px;
display: flex;

label {
font-size: 14px;
color: #8592a6;
letter-spacing: 0;
text-align: left;
user-select: none;

}
`
export const InputContainerC = styled.div`
width: 100%;


input {
box-sizing: border-box;
height: 100%;
padding: 21px 0px 0px;
width: 400px;
margin-top: 12px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
border-radius: 4px;
font-weight: bold;
font-size: 14px;
letter-spacing: 0;
text-align: left;
border: transparent;
    
::placeholder {
color: #0f294d;
padding: 0px 0px 0px 10px;
}
    
}
`
export const LiContainer = styled.li`
display: inline-block;
vertical-align: top;
box-sizing: border-box;
`
export const CalendarContainer = styled.div`
display: inline-flex;
justify-content: space-between;
position: relative;
width: 80%;
height: 100%;

> div {
position: relative;
width: calc(50% - 20px);
height: 100%;
text-align: center;


label {
position: absolute;
top: 8px;
left: 16px;
font-size: 12px;
font-size: 14px;
color: #8592a6;
letter-spacing: 0;
text-align: left;
line-height: 18px;
user-select: none;
}
}

input {
width: calc(100% - 30px);
height: 40px;
border: none;
padding: 24px 0px 0px;
border-bottom: 2px solid transparent;
font-weight: bold;
font-size: 14px;
color: #0F294D !important;
letter-spacing: 0;
text-align: left;
padding: 24px 0px 0px;
margin-top: 30px;

}

`
export const NigthContainer= styled.div`
position: absolute;
font-size: 12px;
color: #8592a6;
line-height: 18px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 3;
user-select: none;

span {
font-size: 12px;
color: #8592a6;
line-height: 18px; 
}


`
export const AvaliationContainer = styled.div`
display: flex;
align-items: flex-end;
margin-top: 10px;

> div {
display: inline-flex;
align-items: center;
}
`
export const TravelContainer = styled.div`
display: inline-flex;
align-items: center;
color: #0F294D;
margin-top: -40px;
input {
font-size: 16px;
margin-right: 8px;
display: inline-block;
font-style: normal;
vertical-align: baseline;
-webkit-font-smoothing: antialiased;
margin-left: 20px;

}
`
export const TravelTwo = styled.div`
display: inline-flex;
align-items: center;
margin-left: 70px;


label {
margin-right: 8px;
cursor: pointer;
font-size: 14px;
color: #333;
}

span {
display: inline-flex;
justify-content: center;
align-items: center;
background: #F0F2F5;
border-radius: 1px;
width: 53px;
height: 22px;
margin-right: 8px;
font-size: 14px;
color: #0F294D;
cursor: pointer;
border: 1px solid transparent;
border-radius: 4px;

img {
width: 20px;
margin: 5px;
}


}
button {
background: #3264FF;
border: none;
cursor: pointer;
margin-left: 150px;
width: 20%;
height: 30px;
color: #F0F2F5;
font-size: 14px;
border-radius: 10px;
}

`
export const HoteisProcurados = styled.div`
margin-top: 48px;
width: 100%;
height: 494px;

h3 {
color: #0f294d;
font-size: 28px;
font-weight: bold;
letter-spacing: 0px;
line-height: 34px;
}


ul {
display: flex;
margin-top: 20px;
font-weight: normal;
list-style: none;
gap: 30px;
li {
background: #0f294d;
color: #fff;
font-weight: bold;
padding: 6px 16px;
border-radius: 5px;

span {
    color: #fff;
    font-weight: bold;
    font-size: 14px;
}
}
}
`
export const RecomendedHotels = styled.div`
width: 100%;
height: 350px;
margin-top: 24px;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
border-radius: 50%;
`
export const SwiperContainer = styled.div`
width: 1160px;
margin-left: 0px;
margin-right: 0px;
display: flex;
align-items: center;
justify-content: center;

`
export const HotelsImg = styled.div`
display: flex;
width: 100%;
height: 300px;
transition: all .2s ease-in-out;
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
background-image: url("https://ak-d.tripcdn.com/images/22070n000000eyqjnAF6F_R_550_412_R5_D.jpg");
margin-top: 10px;
border-radius: 5px;
`