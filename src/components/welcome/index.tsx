import { View, Text, Image } from 'react-native';
import { s } from './styles';

export function Welcome() {
  return (
    <View>
      <Image source={require('../../assets/logo.png')} style={s.logo} />
      <Text style={s.title}>Boas vindas ao Personal Life</Text>
      <Text style={s.subtitle}>
        Controle as suas ações a partir de hoje,
        {'\n'}e tenha uma vida mais organizada.
      </Text>
    </View>
  );
}
