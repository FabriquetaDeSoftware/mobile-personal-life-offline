import { Text, TextProps } from 'react-native';
import { s } from './styles';

export function ButtonTitle({ children, ...rest }: TextProps) {
  return (
    <Text {...rest} style={s.title}>
      {children}
    </Text>
  );
}
