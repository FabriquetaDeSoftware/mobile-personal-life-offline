import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '../../styles/theme';

export const s = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: colors.green.base,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 14,
    flexShrink: 1,
  },
  title: {
    color: colors.gray[100],
    fontFamily: fontFamily.semiBold,
    fontSize: 18,
  },
});
