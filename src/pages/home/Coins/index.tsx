
import { Footer } from "../Footer";
import {  BoxScreeShot, BoxShadowImg, ContainerCoins, DescontoContainer, FlexContainerContent, FlexContainerImg, ImgIcom, InnerImg, ParagrafoTitle, PhoneImg, ScrenShotBox, ScrenShotInner, ScrenShotOuter, TextBox, TitleCoin, TitleCon, TitleParagraph } from "./styles";


export  function Coins() {
 return(
    <ContainerCoins>
        
        <FlexContainerContent>
            <TextBox>
            <ImgIcom></ImgIcom>
             
            <TitleCoin>30% mais Trip Coins</TitleCoin>
             <TitleParagraph>Você receberá mais 30% em Trip Coins cada vez que usar o app para fazer reservas.
            Viaje de forma inteligente ganhando e usando Trip Coins! 100 Trip Coins equivalem a US$ 1,00.</TitleParagraph>
            </TextBox>
            <PhoneImg>
                <ScrenShotBox>
                    <ScrenShotOuter>
                    <ScrenShotInner></ScrenShotInner>
                    </ScrenShotOuter>
                </ScrenShotBox>
            </PhoneImg>
        </FlexContainerContent>
        
        
         <DescontoContainer>
            <FlexContainerImg>
              <BoxScreeShot>
                <BoxShadowImg>
                    <InnerImg></InnerImg>
                </BoxShadowImg>
              </BoxScreeShot>
              <TitleCon>
                 <div>Até 50% de desconto</div>
                 <ParagrafoTitle>Ofertas exclusivas ao app</ParagrafoTitle>
                 <h3>Com uma seção inteira dedicada às ofertas e promoções mais recentes, 
                é fácil conseguir uma oferta excelente para suas próximas férias.</h3>
              </TitleCon>
            </FlexContainerImg>
           
         </DescontoContainer>
          <Footer />
    </ContainerCoins>
 )
}