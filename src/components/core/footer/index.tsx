import { NextComponentType } from 'next';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import {
  StyledFooter,
  StyledAbout,
  StyledContent,
  StyledMedia,
  StyledRights,
} from './styled';
import { StyledTitle } from '../../../styles/global';

const Footer: NextComponentType = () => {
  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledContent>
        <StyledTitle
          css={{ color: `$white`, fontSize: `$44`, lineHeight: `$space$52` }}
          type="logo"
        >
          CLICKBAIXE
        </StyledTitle>
        <StyledAbout>
          <p>
            Site desenvolvido por <strong>Junior</strong>.{` `}
          </p>
          <Link href="/privacy">
            <a style={{ color: `white` }}>Política de privacidade</a>
          </Link>
          <StyledMedia>
            <a
              href="https://twitter.com/devjusan"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter color="#aaa" size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/devjusan/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin color="#aaa" size={25} />
            </a>
            <a
              href="https://www.instagram.com/devjusan/"
              target="_blank"
              rel="noreferrer"
            >
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
