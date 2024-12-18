import { colors, fontFamily } from '@/src/styles/theme';
import { StyleSheet } from 'react-native';

const lineHeight = 18;
const maxHeight = 4 * lineHeight;

export const s = StyleSheet.create({
  input: {
    maxHeight,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    padding: 12,
    fontSize: 14,
    lineHeight,
  },
});
