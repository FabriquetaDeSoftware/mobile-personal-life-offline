import React from 'react';
import {
  Modal,
  ModalProps,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={s.modalOverlay}>
          <View style={s.modalContent}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
