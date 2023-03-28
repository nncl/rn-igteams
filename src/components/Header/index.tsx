import { Container, Logo } from './styles';

import logo from '@assets/logo.png';

export const Header = () => (
  <Container>
    <Logo source={logo} />
  </Container>
);
