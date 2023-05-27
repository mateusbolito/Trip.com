import { Airplane, House, TrainSimple } from "phosphor-react";
import { BoxContainer, BoxForm, BoxWrapper,   ButtonContent,   CalendarContainer,   CheckoutContainer,   ContainerCalendarItem,   DestinyContent, IstanceBox, MetodosPayment, NigthContainer, SearchBoxContent, SimpleText, SloganContent, SloganSearch, TextContainer } from "./styles";

export function CheckIn() {
    return(
        <SloganSearch>
        <div>
            <SloganContent>
                Sua viagem começa aqui
            </SloganContent>
        </div>

         <MetodosPayment>
            <div>
            <TextContainer>
              <span>Pagamento Seguro</span>   
            </TextContainer>
             <SimpleText>
                <div>
                <span>Atendimento rapido por telefone</span>
                </div>
             </SimpleText>
            </div>
         </MetodosPayment>

          <BoxContainer>
            <div>
                <ul>
                    <li>
                    <House size={32} />
                    <span>Hoteis</span>
                    </li>
                    <li>
                    <Airplane size={32} />
                    <span>voos</span>
                    </li>
                    <li>
                    <TrainSimple size={32} />
                    <span>Trens</span>
                    </li>
                </ul>
            </div>
             
             
          </BoxContainer>
          <BoxForm>
                <div>
                <IstanceBox>
                <BoxWrapper>
                <ul>
                <li>
                 <div>
                <SearchBoxContent>
                 <label>Destino</label> 
                  <DestinyContent>
                    <input type="text" placeholder="CIdade, regiaoa, aeroporto ponto de referencia" />
                  </DestinyContent>
                </SearchBoxContent>
                 </div>
                </li>
                 
                 <CalendarContainer>
                    <ContainerCalendarItem>
                      <div>
                        <span>Check In</span>
                         <div>
                         <input type="text" placeholder="qui, 18 mai" className="Calendar" />
                         </div>
                          <NigthContainer>
                            <span>1 noite</span>
                            <CheckoutContainer>
                            <span>Check-Out</span>
                            
                          </CheckoutContainer> 
                          </NigthContainer>
                          
                      </div>
                      <ButtonContent>Buscar</ButtonContent>
                    </ContainerCalendarItem>
                   
                 </CalendarContainer>
                 
                </ul>
                </BoxWrapper>
                </IstanceBox>
                </div>
             </BoxForm>
            
     </SloganSearch>
    )
}