import { TextInput, TextInputProps, View } from 'react-native';
import { s } from './styles';
import { Button } from '../button';

export function Input() {
  return (
    <View>
      <TextInput style={s.input} editable multiline numberOfLines={4} />
      <Button.Root
        style={{
          borderTopStartRadius: 0,
          borderTopEndRadius: 0,
          borderBottomStartRadius: 8,
          borderBottomEndRadius: 8,
          height: 45,
        }}
      >
        <Button.Title>Submit</Button.Title>
      </Button.Root>
    </View>
  );
}
