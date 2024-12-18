import { TextInput, View, ViewProps } from 'react-native';
import { s } from './styles';

interface Props extends ViewProps {}

export function Input({ children, ...rest }: Props) {
  return (
    <View>
      <TextInput style={s.input} multiline numberOfLines={4} />
      {children}
    </View>
  );
}
