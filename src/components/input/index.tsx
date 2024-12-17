import { TextInput } from 'react-native';
import { s } from './styles';

export function Input() {
  return <TextInput style={s.input} placeholder="useless" editable multiline />;
}
