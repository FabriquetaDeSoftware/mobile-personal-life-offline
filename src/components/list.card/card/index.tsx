import { Pressable, Text, View } from 'react-native';
import { s } from './styles';
import { Button } from '../../button';
import { colors } from '@/src/styles/colors';

export function Card() {
  return (
    <View>
      <View style={s.containerText}>
        <Text style={s.contentText}>
          a barata diz que tem sete saias de filo e mentira da barata ela tem e
          uma so hahaha hohoho ela tem e uma so hahaha hohoho ela tem e uma so
        </Text>
      </View>
      <View style={s.containerPressable}>
        <Button.Root
          style={[
            s.contentPressable,
            { borderBottomEndRadius: 0, backgroundColor: colors.gray[500] },
          ]}
        >
          <Button.Title>Editar</Button.Title>
        </Button.Root>
        <Button.Root
          style={[
            s.contentPressable,
            { borderBottomStartRadius: 0, backgroundColor: colors.red.base },
          ]}
        >
          <Button.Title>Excluir</Button.Title>
        </Button.Root>
      </View>
    </View>
  );
}
