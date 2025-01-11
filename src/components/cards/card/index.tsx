import { Text, View, ViewProps } from 'react-native';
import { s } from './styles';

interface Props extends ViewProps {
  content: string;
}

export function Card({ content, children }: Props) {
  return (
    <View>
      <View style={s.containerText}>
        <Text style={s.contentText}>{content}</Text>
      </View>
      <View style={s.containerPressable}>{children}</View>
    </View>
  );
}
