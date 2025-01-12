import { Dimensions, StyleSheet } from 'react-native';
import { colors, fontFamily } from '../../../styles/theme';

const { width: screenWidth } = Dimensions.get('window');

export const s = StyleSheet.create({
  container: {
    height: 'auto',
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    gap: 10,
    width: screenWidth / 2 - 44,
  },
  name: {
    fontSize: 14,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
  },
  containerSelected: {
    backgroundColor: colors.green.base,
    borderColor: colors.green.base,
  },
  nameSelected: {
    color: colors.gray[100],
  },
});
