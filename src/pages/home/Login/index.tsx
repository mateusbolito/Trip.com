import {
  ButtonContent,
  IconsMidias,
  InputLogin,
  LoginContainer,
  LogoInContainer,
} from "./styles";
import face from "../../../assets/face.png";
import google from "../../../assets/google.png";
import webchat from "../../../assets/webchat.png";
import { Footer } from "../Footer";

export function LoginPage() {
  return (
    <LoginContainer>
      <LogoInContainer>
        <h2>Logar com/Insira seu email</h2>
      </LogoInContainer>

      <InputLogin>
        <input type="email" placeholder="Insira seu email" />
        <input type="password" placeholder="Insira sua senha" />

        <ButtonContent>Continuar</ButtonContent>
      </InputLogin>

      <IconsMidias>
        <div>
          <img className="face" src={face} alt="face" />
          <img src={google} alt="gogle" />
          <img src={webchat} alt="chat" />
        </div>
      </IconsMidias>
      <Footer />
    </LoginContainer>
  );
}
