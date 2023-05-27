import styled from "styled-components";

export const FooterContainer = styled.div`
background-color: #fff;
padding-bottom: 35px;
font-family: arial,sans-serif;
font-size: 14px;
color: #0f294d;
list-style: none;
border-top: 1px solid #e4e4e4;
margin-top: 100px;
`
export const ContentContianer = styled.div`
width: 100%;
box-sizing: border-box;
padding-left: 10px;
padding-right: 10px;
display: flex;
align-items: center;
justify-content: center;
`
export const ClearFix = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top: 32px;
padding-bottom: 32px;

`
export const ContentLinkContainer = styled.div`
display: flex;
flex-direction: row;
font-size: 14px;


> div {
width: 250px;
height: 150px;
font-size: 16px;
font-weight: 700;
margin-top: 0;
margin-bottom: 8px;
margin-top: 30px;

ul {
font-size: 14px;
list-style: none;


li {
margin-bottom: 2px;
font-size: 12px;
line-height: 1.5;

a {
color: inherit;
text-decoration: none;
}
}
}
}
`
export const MethodPayment = styled.div`
display: flex;
flex-direction: column;
width: 256px;
`
export const PaymentContainer = styled.div`
width: 250px;

> div {
font-size: 12px;
line-height: 14px;
color: #8592a6;
margin-bottom: 7px;
}


`

export const PaymentFinish = styled.div`
display: flex;
flex-wrap: wrap;



img {
display: inline-block;
margin-right: 8px;
margin-bottom: 8px;
border: 1px solid #dadfe6;
border-radius: 2px;
width: 36px;
height: 24px;

}
`
export const ParceirosContent = styled.div`
display: flex;
flex-wrap: wrap;

> div {
margin-right: 25px;


img {
height: 16px;
}
}
p {
font-size: 12px;
line-height: 14px;
color: #8592a6;
margin-bottom: 7px;
}

`