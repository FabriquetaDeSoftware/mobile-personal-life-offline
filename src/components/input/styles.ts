import { colors, fontFamily } from '@/src/styles/theme';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  input: {
    minHeight: 40,
    height: 'auto',
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    padding: 12,
  },
});
