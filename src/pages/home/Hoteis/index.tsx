import { AvaliationContainer, CalendarContainer, ContainerLiDiv, ContainerPage, ContentWrap, DestinyContent, 
    HoteisProcurados, 
HotelContainerSearch,  InputContainerC, LiContainer,  
RecomendedHotels,  
SearchDestiny, SwiperContainer, TitleHotel, TravelContainer, TravelTwo } from "./styles";

import Start1 from "../../../assets/Start1.jpg"
import { AvaliationContent, ContentContainer, HotelDescription, Hotelv2, ImgContentReal, OverLabel, PrecoReal, PriceHotel,
   ReviewContainer, ScoreContainer, StarContainer, TitleContainerHotel, TituloContent } from "../Destaques/styles";


export function HotelPage() {
    return(
        <ContainerPage>
            <TitleHotel>
               <h1>Hoteis</h1>
            </TitleHotel>

            <HotelContainerSearch>
            <ContentWrap>
            <SearchDestiny>
            <ul>
            <li>
            <ContainerLiDiv>
                <DestinyContent>
                    <label> Destino
                    <InputContainerC>
                       <input type="text" placeholder="Cidade, Regiao.. ponto de referencia" />
                     </InputContainerC>
                    </label>
                     
                </DestinyContent>   
                               
            </ContainerLiDiv>
            </li> 
             <LiContainer>
                <CalendarContainer>
                    <div>
                        <label htmlFor="CheckIn"> CheckIn</label>
                         <InputContainerC>
                         <input type="text" placeholder="Selecione a data" />
                         </InputContainerC> 
                        
                    </div>
                    <div>
                        <label htmlFor="CheckIn">Quartos & Hospedes</label>
                         <InputContainerC>
                         <input type="text" placeholder="1 quarto, 2 adultos" />
                         </InputContainerC> 
                        
                    </div>
                    
                </CalendarContainer>
             </LiContainer>
            </ul>
            <AvaliationContainer>
                <div>
                    <TravelContainer>
                        <input type="checkbox" />
                         <span>Estou viajando a trabalho</span>
                    </TravelContainer>
                </div>
                  <TravelTwo>
                    <label>Classificação por estrelas</label>
                      <span>
                        <em>2</em>
                         <img src={Start1} alt="" />
                      </span>
                      <span>
                        <em>3</em>
                         <img src={Start1} alt="" />
                      </span>
                      <span>
                        <em>4</em>
                         <img src={Start1} alt="" />
                      </span>
                      <span>
                        <em>5</em>
                         <img src={Start1} alt="" />
                      </span>
                      <button>Buscar</button>
                  </TravelTwo>
            </AvaliationContainer>
                    </SearchDestiny>
                </ContentWrap>
               
            </HotelContainerSearch>
                
                 <HoteisProcurados>
                    <h3>Hoteis Mais Procurados do Brasil</h3>
                    <ul>
                        <li>
                            <span>Rio De Janeiro</span>
                        </li>
                        <li>
                            <span>Sao Paulo</span>
                        </li>
                        <li>
                            <span>Curitiba</span>
                        </li>
                    </ul> 
                     <RecomendedHotels>
                        <SwiperContainer>
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
          Américas Granada Hotel
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
          Hotel Atlântico Business Centro
          </HotelDescription>
          </OverLabel>
           <StarContainer>
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
          Hotel Atlântico Business Centro
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
         <AvaliationContent> 400 Avaliçoes</AvaliationContent>
        </ReviewContainer>
        <PriceHotel>
          <PrecoReal>
            <TituloContent>R$ R$ 2.100</TituloContent>
          </PrecoReal>
        </PriceHotel>
         </ContentContainer>
         
       
                        </SwiperContainer>
                     </RecomendedHotels>
                 </HoteisProcurados>
        </ContainerPage>
    )
}