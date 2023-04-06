import { Container, Title, Subtitle } from './styles';

type HighlightProps = {
  title: string;
  subtitle: string;
};

export const Highlight = ({ title, subtitle }: HighlightProps) => (
  <Container>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);
