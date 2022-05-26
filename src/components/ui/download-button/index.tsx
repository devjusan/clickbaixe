import { useEffect, useState } from 'react';
import Button from '../button';
import { StyledContainer } from './styled';

const DownloadButton = () => {
  const [timer, setTimer] = useState(60 * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((state) => state - 1000);
    }, 1000);

    if (timer === 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <StyledContainer>
      {timer === 0 ? (
        <Button>baixar agora!</Button>
      ) : (
        <p>
          Aguarde <strong>{timer / 1000}</strong>{' '}
          {timer === 1 ? 'segundo' : 'segundos'} para o seu download liberar ou
          clique em um anúncio!
        </p>
      )}
    </StyledContainer>
  );
};

export default DownloadButton;
