import { colors } from '@/src/styles/colors';
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
    paddingVertical: 20,
    width: '100%',
    shadowColor: colors.black.dark,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 10,
    marginTop: 24,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
});
