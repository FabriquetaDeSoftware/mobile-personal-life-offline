import { Text, Pressable, PressableProps } from 'react-native';
import { s } from './styles';
import { colors } from '../../../styles/theme';

type Props = PressableProps & {
  text: string;
  isSelected?: boolean;
};

export function Category({ text, isSelected = false, ...rest }: Props) {
  return (
    <Pressable
      style={[s.container, isSelected && s.containerSelected]}
      {...rest}
    >
      <Text style={[s.name, isSelected && s.nameSelected]}>{text}</Text>
    </Pressable>
  );
}
