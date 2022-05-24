import { StyledTitle } from '@//styles/global';
import { NextComponentType } from 'next';
import {
  StyledFooter,
  StyledAbout,
  StyledContent,
  StyledMedia,
  StyledRights,
} from './styled';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
const Footer: NextComponentType = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledContent>
        <StyledTitle
          css={{ color: '$white', fontSize: '$44', lineHeight: '$space$52' }}
          type={'logo'}
        >
          CLICKBAIXE
        </StyledTitle>
        <StyledAbout>
          <p>
            Site desenvolvido por <strong>Junior</strong>.{' '}
          </p>
          <Link href={'/privacy'}>
            <a style={{ color: 'white' }}>Política de privacidade</a>
          </Link>
          <StyledMedia>
            <a href="https://twitter.com/devjusan" target="_blank">
              <FaTwitter color="#aaa" size={25} />
            </a>
            <a href="https://www.linkedin.com/in/devjusan/" target="_blank">
              <FaLinkedin color="#aaa" size={25} />
            </a>
            <a href="https://www.instagram.com/devjusan/" target="_blank">
              <FaInstagram color="#aaa" size={25} />
            </a>
          </StyledMedia>
        </StyledAbout>
      </StyledContent>
      <StyledRights>© {year} CLICKBAIXE Co.</StyledRights>
    </StyledFooter>
  );
};

export default Footer;
