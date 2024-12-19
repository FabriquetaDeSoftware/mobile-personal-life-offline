import { Modal, ModalProps, Text, View } from 'react-native';
import { s } from './styles';

interface Props extends ModalProps {
  isVisible: boolean;
}

export function Popup({ isVisible = false, children, ...rest }: Props) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => !isVisible}
      {...rest}
    >
      <View style={s.modalOverlay}>
        <View style={s.modalContent}>{children}</View>
      </View>
    </Modal>
  );
}
