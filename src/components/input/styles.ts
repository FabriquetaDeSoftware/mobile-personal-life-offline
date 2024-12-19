import { colors, fontFamily } from '@/src/styles/theme';
import { StyleSheet } from 'react-native';

const lineHeight = 18;
const maxHeight = 5 * lineHeight;

export const s = StyleSheet.create({
  input: {
    maxHeight,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    lineHeight,
  },
});
