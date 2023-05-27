import { AppCenter, AppContainer, AppLoad, ButtonContainer, 
InputContent, MensageText, MobileContainer, MobileContent, 
OnlineAuto, ReserveTitle, SmsContent, SmsLayout,  } from "./styles";

export function AppContent() {

    return(
        <AppContainer>
        <AppCenter>
        <MobileContainer>
        <MobileContent> 
        </MobileContent>
        </MobileContainer>
        <AppLoad>
        <h1>O Jeito Mais Facil De Ir</h1>
        <ReserveTitle>
        Reserve  em questão de segundos  voos, hotéis, trens e aluguel de veículos em qualquer lugar do mundo. 
         Receba atualizações de voo em tempo real, informações de viagem, ofertas exclusivas e 30% mais Trip Coins somente no app!
        </ReserveTitle>
        <SmsLayout>
            <SmsContent>
                <OnlineAuto>
                   <div>
                    <ul>
                        <li>SMS</li>
                        <li>E-mail</li>
                    </ul>
                    </div> 
                </OnlineAuto>
            </SmsContent>
            <MensageText>
            Insira seu número de telefone para receber uma mensagem de texto com um 
            link para baixar o app.
            </MensageText>
            <InputContent>
              <input type="text" placeholder="Insira seu E-mail" />
            </InputContent>
             <ButtonContainer>
                <button>Enviar Link do app</button>
             </ButtonContainer>
        </SmsLayout>
        </AppLoad>
        
        </AppCenter>
        
        </AppContainer>
    )
}