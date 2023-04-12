import { Container, Icon, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

type GroupCardProps = TouchableOpacityProps & {
  title: string;
};

export const GroupCard = ({ title, ...rest }: GroupCardProps) => (
  <Container {...rest}>
    <Icon />
    <Title>{title}</Title>
  </Container>
);
