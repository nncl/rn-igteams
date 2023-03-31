import { BackButton, Container, IconBack, Logo } from './styles';

import logo from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: Props) => (
  <Container>
    {showBackButton && (
      <BackButton>
        <IconBack />
      </BackButton>
    )}

    <Logo source={logo} />
  </Container>
);
