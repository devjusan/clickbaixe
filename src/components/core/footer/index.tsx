/* eslint-disable react/no-unescaped-entities */
import { NextComponentType } from 'next';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import {
  StyledFooter,
  StyledAbout,
  StyledContent,
  StyledMedia,
  StyledRights,
  StyledInformation,
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
      <StyledInformation>
        <p>
          <strong>Importante:</strong> Os arquivos disponíveis nesse site não
          são hospedados por nós, os links são retirados de sites terceiros
          confiáveis, apenas indexamos. Qualquer denúncia deve ser encaminhada
          diretamente aos sites responsáveis por hospedar os arquivos em seus
          servidores, ou realizar um pedido de remoção do conteúdo diretamente
          com o buscador (via DMCA).
        </p>
        <p>
          O intuito do CLICKBAIXE é apenas organizar os links com imagens e
          textos através de "scraping" para fins de busca do usuário.
        </p>
      </StyledInformation>
    </StyledFooter>
  );
};

export default Footer;
