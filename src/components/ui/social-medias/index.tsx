import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { StyledSubtitle } from '@//styles/global';
import { StyledContainer, StyledMedia } from './styled';

const SocialMedias = () => (
  <StyledContainer>
    <StyledSubtitle
      css={{
        textAlign: `start`,
        paddingLeft: `0`,
        fontWeight: `700`,
        fontSize: `$24`,
        fontFamily: `$logo`,
      }}
    >
      REDES SOCIAIS
    </StyledSubtitle>
    <StyledMedia>
      <a href="https://twitter.com/devjusan" target="_blank" rel="noreferrer">
        <FaTwitter color="#333" size={25} />
      </a>
      <a
        href="https://www.linkedin.com/in/devjusan/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin color="#333" size={25} />
      </a>
      <a
        href="https://www.instagram.com/devjusan/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram color="#333" size={25} />
      </a>
    </StyledMedia>
  </StyledContainer>
);

export default SocialMedias;
