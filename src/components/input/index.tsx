import { TextInput, TextInputProps } from 'react-native';
import { s } from './styles';

interface Props extends TextInputProps {}

export function Input({ style, ...rest }: Props) {
  return <TextInput {...rest} style={[s.input, style]} />;
}
