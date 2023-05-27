import { AppContent } from "../AppContent";
import { Coins } from "../Coins";
import {  AppPhoneContainer, ContainerApp, ContainerImg, FlexContainer, ImgContent, ImgContent2, ImgContent3, TextTitleOne, TextTitleTwo,     } from "./styles";


export function AppPhonePage() {
  return(
    <AppPhoneContainer>
     <AppContent />
       <ContainerApp>
        <FlexContainer>
            <ContainerImg>
            <ImgContent></ImgContent>
             <TextTitleOne>30% mais Trip Coins</TextTitleOne>
             <TextTitleTwo>Ganhe mais Trip Coins cada vez que reservar</TextTitleTwo>
             
            </ContainerImg>
           
            <ContainerImg>
            <ImgContent2></ImgContent2>
             <TextTitleOne>Ofertas exclusivas ao app</TextTitleOne>
             <TextTitleTwo>Economize instantaneamente reservando pelo app</TextTitleTwo>
             
            </ContainerImg>
            
            <ContainerImg>
            <ImgContent3></ImgContent3>
             <TextTitleOne>Fácil planejamento de viagens</TextTitleOne>
             <TextTitleTwo>Planeje suas viagens com o app e receba as atualizações de viagens mais recentes</TextTitleTwo>
             
            </ContainerImg>
            
            
        </FlexContainer>
       </ContainerApp>

       <Coins/>
    </AppPhoneContainer>
    
  )
}