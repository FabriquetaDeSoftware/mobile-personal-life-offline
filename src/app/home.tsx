import { ScrollView, Text, View } from 'react-native';
import { colors } from '../styles/colors';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        gap: 40,
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: colors.red.base,
          height: 200,
          width: 280,
        }}
      >
        <Text>Hello World</Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: colors.red.base,
          height: 200,
          width: 280,
        }}
      >
        <Text>Hello World</Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: colors.red.base,
          height: 200,
          width: 280,
        }}
      >
        <Text>Hello World</Text>
      </View>
    </View>
  );
}
