import { Container } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

export function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title="Play" subtitle="Play with your groups" />
    </Container>
  );
}
