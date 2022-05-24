import { StyledTitle } from '@//styles/global';
import Image from 'next/image';
import { StyledContainer } from './styled';
import img from '../../assets/hunter.png';

const HelpUs = () => {
  return (
    <StyledContainer>
      <StyledTitle>APOIE-NOS</StyledTitle>
      <Image src={img} />
      <p>Você pode ajudar esse blog a continuar no ar!</p>
      <p>
        Contribua e ajude a permancer o <strong>CLICKBAIXE</strong> no ar!
        Qualquer quantia é bem-vinda.
      </p>
      <p>
        <strong>PIX: jnrplay@hotmail.com</strong>
      </p>
    </StyledContainer>
  );
};

export default HelpUs;
