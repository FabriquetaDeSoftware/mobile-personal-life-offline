import { colors, fontFamily } from '@/src/styles/theme';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  containerText: {
    minHeight: 56,
    height: 'auto',
    backgroundColor: colors.gray[300],
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  containerPressable: {
    maxHeight: 56,
    height: 56,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    flexDirection: 'row',
  },
  contentText: {
    padding: 14,
    fontSize: 16,
    color: colors.gray[600],
    fontFamily: fontFamily.regular,
    textAlign: 'justify',
  },
});
