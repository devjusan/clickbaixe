import Image from 'next/image'
import { StyledContainer } from '../../pages-styles/hepup-styled'
import { StyledTitle } from '../../styles/global'
import img from '../../assets/hunter.png'
import GoogleAdsenseContainer from '../../components/core/adsense-container'

const HelpUs = () => (
  <StyledContainer>
    <GoogleAdsenseContainer />
    <StyledTitle>APOIE-NOS</StyledTitle>
    <Image src={img} />
    <p>Você pode ajudar esse blog a continuar no ar!</p>
    <p>
      Contribua e ajude a permancer o <strong>CLICKBAIXE</strong> no ar!
      Qualquer quantia é bem-vinda.
    </p>
    <p>
      <strong>PIX: devjusan@hotmail.com</strong>
    </p>
  </StyledContainer>
)

export default HelpUs
