import { Modal, ModalProps, Text, View } from 'react-native';
import { s } from './styles';
import { Input } from '../input';
import { colors } from '@/src/styles/colors';
import { Button } from '../button';

interface Props extends ModalProps {}

export function Popup({}: Props) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      //onRequestClose={() => setModalVisible(false)}
    >
      <View style={s.modalOverlay}>
        <View style={s.modalContent}>
          <Text style={s.modalTitle}>Nova Tarefa</Text>
          <Input
            placeholder="Digite o nome da tarefa"
            placeholderTextColor={colors.gray[400]}
            multiline
            numberOfLines={4}
            style={{ height: 90 }}
          />
          <Input
            placeholder="Digite o nome da tarefa"
            placeholderTextColor={colors.gray[400]}
          />

          {/* <View style={{ flexDirection: 'row', gap: 10, marginTop: 20 }}> */}
          <Button.Root
            // onPress={() => setModalVisible(false)}
            style={{ width: '50%', backgroundColor: colors.gray[500] }}
          >
            <Button.Title>Cancelar</Button.Title>
          </Button.Root>
          <Button.Root
            // onPress={() => setModalVisible(false)}
            style={{ width: '50%' }}
          >
            <Button.Title>Salvar</Button.Title>
          </Button.Root>
          {/* </View> */}
        </View>
      </View>
    </Modal>
  );
}
