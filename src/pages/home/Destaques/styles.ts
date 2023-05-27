import styled from "styled-components";

export const DestaqueContainer = styled.div`
width: 100%;
margin: 0;
background: ${({theme})=> theme.colors["base-white3"]};
display: inline-block;
min-height: 600px;
cursor: pointer;

`
export const TitleTextContainer = styled.div`
font-size: 28px;
color: #0f294d;
letter-spacing: 0;
text-align: center;
line-height: 34px;
font-weight: 700;
padding: 24px;
margin-top: 20px;


> div {
line-height: 18px;
margin-right: 16px;
gap: 20px;

img {
width: 16px;
vertical-align: -2px;
margin-right: 4px;
}
}
`
export const CenterTitle = styled.div`
margin-top: 16px;
display: flex;
align-items: center;
justify-content: center;
position: relative;

`
export const ModuleText = styled.div`
display: inline-block;
span {
color: #0f294d;
font-size: 14px;
font-weight: 500;
vertical-align: top;
}
`
export const SecondTitle = styled.div`
line-height: 18px;
margin-right: 16px;

img {
width: 16px;
vertical-align: -2px;
margin-right: 4px;
}

> div {
display: inline-block;

span {
color: #0f294d;
font-size: 14px;
font-weight: 500;
vertical-align: top;
}
}
`
export const CidadesDestaque = styled.div`

width: 100%;
height: 76px;
text-align: left;
padding: 0;

span:hover {
background-color: #FFFAF4;
}
`
export const CidadesRio = styled.div`
width: 100%;
height: 76px;
position: relative;
overflow-x: hidden;
display: flex;
align-items: center;
justify-content: center;


`
export const CidadesWrapper = styled.div`
width: 980px;
height: 76px;
padding: 20px 0;
display: flex;
align-items: center;
justify-content: center;


` 
export const SpanContent = styled.span`
cursor: pointer;
display: inline-block;
align-items: center;
justify-content: center;
font-size: 14px;
line-height: 18px;
padding: 8px 16px;
margin-right: 16px;
border: 1px solid #dadfe6;
border-radius: 2px;
color: #0f294d;

` 

export const ContainerFlex = styled.div`
width: 100%;
height: 380px;
display: flex;
align-items: center;
justify-content: center;
`
export const ContentContainer = styled.div`
width: 400px;
height: 250px;
display: block;
padding: 0 16px 0 0;
box-sizing: content-box;
`
export const Hotelv2 = styled.div`
border-radius: 8px;
box-shadow: 0 8px 16px 0 rgba(15,41,77,.08);
background: #fff;
overflow: hidden;
height: 100%;
display: flex;
flex-direction: column;
transform: translateZ(0);

> div {
position: relative;
}
`
export const HotelClipv2 = styled.div`
border-radius: 2px;
overflow: hidden;
background: #dadfe6;
width: 100%;
height: 10px;
` 
export const ImgContentReal = styled.div`
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

export const ImgContentReal2 = styled.div`
width: 100%;
height: 300px;
transition: all .2s ease-in-out;
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
background-image: url("https://ak-d.tripcdn.com/images/02252120008jnbdm09EB5_R_550_412_R5_D.jpg");
margin-top: 10px;
border-radius: 5px;
`

export const ImgContentReal3 = styled.div`
width: 100%;
height: 300px;
transition: all .2s ease-in-out;
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 50%;
background-image: url("https://ak-d.tripcdn.com/images/220o1700000131tos0550_R_640_440_R5_D.jpg_.webp");
margin-top: 10px;
border-radius: 5px;
`



export const  TitleContainerHotel = styled.div`
flex: 1 1;
padding: 16px;
display: flex;
flex-direction: column;
`
export const OverLabel = styled.div`
box-sizing: border-box;
width: 100%;
margin-top: 16px;
font-size: 12px;
`
export const HotelDescription = styled.div`
text-overflow: ellipsis;
overflow: hidden;
margin-right: 4px;
color: #0f294d;
font-weight: 700;
font-size: 16px;
line-height: 22px;
`
export const StarContainer = styled.div`
line-height: 20px;
box-sizing: content-box;
display: inline-block;
vertical-align: middle;
padding-bottom: 2px;

img {
width: 25px;
}
`
export const ReviewContainer = styled.div`
vertical-align: middle;
color: #999;
margin: 8px 0;
font-size: 12px;
`
export const ScoreContainer = styled.div`
display: inline-block;
background: #496ace;
border-radius: 5px;
padding: 0 5px;
color: hsla(0,0%,100%,.5);
font-size: 12px;
line-height: 1.3;
margin-left: 15px;


span {
font-size: 16px;
color: #fff;
}
`
export const AvaliationContent = styled.div`
display: inline-block;
line-height: 22px;
font-size: 17px;
color: #8592a6;
margin-left: 3px;
color:  #496ace;
margin-left: 20px;
`
export const PriceHotel = styled.div`

box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;

`
export const PrecoReal = styled.div`
font-size: 16px;
color: #3264ff;
letter-spacing: 0;
text-align: right;
line-height: 22px;


`
export const TituloContent = styled.span`
color: #0f294d;
font-size: 20px;
font-weight: 700;
line-height: 26px;

`