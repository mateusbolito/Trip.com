import styled from "styled-components";

export const LoginContainer = styled.div`
 width: 100%;
 height: 100%;
 
`

export const LogoInContainer = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top: 120px;
 color: ${({theme})=> theme.colors["base-cinza"]}; 

 h2 {
color: rgb(15, 41, 77);
 }
`

export const InputLogin = styled.div`
width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background: transparent;

 input {
 margin-top: 30px;
 height: 40px;
 border: 1px solid #dadfe6;
 width: 300px;
 text-align: center;
 font-size: 16px;
 

 border-radius: 5px;
 } 

 button:hover {
background: #2271b1;
}
`

export const ButtonContent = styled.button`
width: 200px;
height: 45px;
margin-top: 30px;
border: none;
border-radius: 4px;
color: #fff;
font-size: 14px;
background: ${({theme})=> theme.colors["base-blue"]};
transition: 1s;

`
export const IconsMidias = styled.div`
min-width: 40px;
width: auto;
height: 100%;
cursor: pointer;
text-align: center;


> div {
width: 40px;
height: 40px;
margin: auto;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;

img {
width: 40px;
margin-top: 50px;
display: flex;
align-items: center;
justify-content: center;



}
.face {
width: 50px;
}
}


`