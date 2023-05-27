import { ContentContianer, ContentLinkContainer, FooterContainer, MethodPayment, ParceirosContent, PaymentContainer, PaymentFinish } from "./styles";

export function Footer() {

    return(
        <FooterContainer>
        <ContentContianer>
            <ContentLinkContainer>
            <div>
            <h3>fale conosco</h3>

            <ul>
            <li>
            <a href="">Atendimento Ao Cliente</a>
             </li>
             <li>
            <a href="">Garantia De Serviço</a>
             </li>
             <li>
            <a href="">Feedback Sobre o Site</a>
             </li>
            </ul>
            
            </div>
            </ContentLinkContainer>
            <ContentLinkContainer>
            <div>
            <h3>Sobre</h3>

            <ul>
            <li>
            <a href="">Sobre o Trip.com</a>
             </li>
             <li>
            <a href="">Trabalhe na Trip.com</a>
             </li>
             <li>
            <a href="">Termos e condições</a>
             </li>
             <li>
            <a href="">Declaração de Privacidade</a>
             </li>
             <li>
            <a href="">About Trip.com Group</a>
             </li>
            </ul>
            </div>
            <MethodPayment>
                <PaymentContainer>
                   <div>Metodos De Pagamento</div> 
                   <PaymentFinish>
                    <img src="https://pages.trip.com/images/payment-method/visa.png" />
                    <img src= "https://pages.trip.com/images/payment-method/master-card.png" />
                    <img src= "https://pages.trip.com/images/payment-method/elo-hipercard.png "/>
                    <img src="https://pages.trip.com/images/payment-method/paypal.png" />
                    <img src="https://pages.trip.com/images/payment-method/apple-pay.png" />
                    <img src="https://pages.trip.com/images/payment-method/google-pay.png" />
                    <img src="https://pages.trip.com/images/payment-method/ideal.png" />

                   </PaymentFinish>
                </PaymentContainer>
                 
                <ParceirosContent>
                 
                 <div>
                    <img src="https://pages.trip.com/images/business-partner/GOOGLE.png" />
                 </div>
                    
                </ParceirosContent>
            </MethodPayment>
            
            </ContentLinkContainer>
            
        </ContentContianer>
        </FooterContainer>
    )
} 

