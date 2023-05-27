import { AvaliationContent, CenterTitle, CidadesDestaque, CidadesRio,  ContainerFlex,  ContentContainer, 
  DestaqueContainer,    HotelDescription,    Hotelv2,    ImgContentReal,    ImgContentReal2,    ImgContentReal3,    ModuleText, 
  OverLabel, PrecoReal, PriceHotel, ReviewContainer, ScoreContainer, SecondTitle, SpanContent, StarContainer, TitleContainerHotel, TitleTextContainer, TituloContent } from "./styles";
import Start1 from "../../../assets/Start1.jpg"

export function Destaques() {
  return(
    <DestaqueContainer>
    <TitleTextContainer>Propriedades Em Destaque
    <CenterTitle>
    <div>
    <img src="https://ak-d.tripcdn.com/images/0AS5f120008whj34f2145.png" alt="" />
    </div>
     <ModuleText>
    <span>Garantimos o Melhor Preço</span>
     </ModuleText>

     <SecondTitle>
        <img src="https://ak-d.tripcdn.com/images/0AS6o120009gxfriv28B3.png" alt="" />
        <div>
         <span>Garantia de Reserva de Hotel</span>
        </div>
     </SecondTitle>
     <SecondTitle>
        <img src="https://ak-d.tripcdn.com/images/0AS2j120009gxknwsA052.png" alt="" />
        <div>
         <span>Garantia de Reserva de Hotel</span>
        </div>
     </SecondTitle>
    </CenterTitle>
    </TitleTextContainer>
    
     <CidadesDestaque>
     <CidadesRio>
      <SpanContent>Rio De Janeiro</SpanContent>
      <a href="https://br.trip.com/hotels/sao+paulo-hotel-detail-2232219"><SpanContent>São Paulo</SpanContent></a>
      <a href="https://br.trip.com/hotels/gramado-hotel-detail-2577725"><SpanContent>Gramado</SpanContent></a>
      <a href="https://br.trip.com/hotels/curitiba-hotel-detail-2236547"><SpanContent>Curitiba</SpanContent></a>
      <a href="https://br.trip.com/hotels/belo+horizonte-hotel-detail-23227282"><SpanContent>Belo Horizonte</SpanContent></a>
      <a href="https://br.trip.com/hotels/guarulhos-hotel-detail-2195380"><SpanContent>Guarulhos</SpanContent></a>
      <a href="https://br.trip.com/hotels/salvador-hotel-detail-2563877"><SpanContent>Brasília</SpanContent></a>
      <a href="https://br.trip.com/hotels/brasilia-hotel-detail-2236586"><SpanContent>Salvador</SpanContent></a>
    </CidadesRio>
     </CidadesDestaque>

       <ContainerFlex>
         <ContentContainer>
       <Hotelv2>
        <div>
        <a href="https://br.trip.com/hotels/rio+de+janeiro-hotel-detail-8917251"><ImgContentReal></ImgContentReal></a>
        
        </div>
        </Hotelv2>
        <TitleContainerHotel>
          <OverLabel>
          <HotelDescription>
          ibis budget RJ Praia de Botafogo
          </HotelDescription>
          </OverLabel>
           <StarContainer>
            <img src={Start1} alt="foto" />
            <img src={Start1} alt="foto" />
           </StarContainer>

        </TitleContainerHotel>
        <ReviewContainer>
         <ScoreContainer>
          <span>4</span>
          <span>/</span>
          <span>5</span>
         </ScoreContainer>
         <AvaliationContent> 19 Avaliçoes</AvaliationContent>
        </ReviewContainer>
        <PriceHotel>
          <PrecoReal>
            <TituloContent>R$ 261</TituloContent>
          </PrecoReal>
        </PriceHotel>
         </ContentContainer>
         <ContentContainer>
        <Hotelv2>
        <div>
        <ImgContentReal2>
         
        </ImgContentReal2>
        </div>
        </Hotelv2>
        <TitleContainerHotel>
          <OverLabel>
          <HotelDescription>
          ibis budget Rj Copacabana
          </HotelDescription>
          </OverLabel>
           <StarContainer>
            <img src={Start1} alt="foto" />
            <img src={Start1} alt="foto" />
           </StarContainer>

        </TitleContainerHotel>
        <ReviewContainer>
         <ScoreContainer>
          <span>4</span>
          <span>/</span>
          <span>5</span>
         </ScoreContainer>
         <AvaliationContent> 50 Avaliçoes</AvaliationContent>
        </ReviewContainer>
        <PriceHotel>
          <PrecoReal>
            <TituloContent>R$ 338</TituloContent>
          </PrecoReal>
        </PriceHotel>
         </ContentContainer>
         <ContentContainer>
        <Hotelv2>
        <div>
        <ImgContentReal3>
         
        </ImgContentReal3>
        </div>
        </Hotelv2>
        <TitleContainerHotel>
          <OverLabel>
          <HotelDescription>
           Rio Peixoto de azevedo
          </HotelDescription>
          </OverLabel>
           <StarContainer>
            <img src={Start1} alt="foto" />
            <img src={Start1} alt="foto" />
            <img src={Start1} alt="foto" />
           </StarContainer>

        </TitleContainerHotel>
        <ReviewContainer>
         <ScoreContainer>
          <span>4</span>
          <span>/</span>
          <span>5</span>
         </ScoreContainer>
         <AvaliationContent> 230 Avaliçoes</AvaliationContent>
        </ReviewContainer>
        <PriceHotel>
          <PrecoReal>
            <TituloContent>R$ 450,00</TituloContent>
          </PrecoReal>
        </PriceHotel>
         </ContentContainer>
         <ContentContainer>
        <Hotelv2>
        <div>
        <ImgContentReal>
         
        </ImgContentReal>
        </div>
        </Hotelv2>
        <TitleContainerHotel>
          <OverLabel>
          <HotelDescription>
          Santa Teresa Hotel RJ - MGallery
          </HotelDescription>
          </OverLabel>
           <StarContainer>
            <img src={Start1} alt="foto" />
            <img src={Start1} alt="foto" />
            <img src={Start1} alt="foto" />
            <img src={Start1} alt="foto" />
            <img src={Start1} alt="foto" />
           </StarContainer>

        </TitleContainerHotel>
        <ReviewContainer>
         <ScoreContainer>
          <span>4</span>
          <span>/</span>
          <span>5</span>
         </ScoreContainer>
         <AvaliationContent> 400 Avaliçoes</AvaliationContent>
        </ReviewContainer>
        <PriceHotel>
          <PrecoReal>
            <TituloContent>R$ R$ 2.100</TituloContent>
          </PrecoReal>
        </PriceHotel>
         </ContentContainer>
       </ContainerFlex>

       
       
    </DestaqueContainer>
  )
}