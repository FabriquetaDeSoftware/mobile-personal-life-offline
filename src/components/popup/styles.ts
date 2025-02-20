import { colors, fontFamily } from '@/src/styles/theme';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: colors.black.opacity50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  modalContent: {
    backgroundColor: colors.gray[200],
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 20,
    width: '100%',
    shadowColor: colors.black.dark,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 10,
    marginTop: 24,
  },
});
