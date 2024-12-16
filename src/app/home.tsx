import { ScrollView, View } from 'react-native';
import { IconTicket } from '@tabler/icons-react-native';
import { Button } from '../components/button';
import { Welcome } from '../components/welcome';

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <ScrollView>
        <View style={{ gap: 40 }}>
          <Button.Root style={{ height: 150 }}>
            <Button.Title>Finanças</Button.Title>
            <Button.Icon icon={IconTicket} />
          </Button.Root>
          <Button.Root style={{ height: 150 }}>
            <Button.Title>Agenda</Button.Title>
            <Button.Icon icon={IconTicket} />
          </Button.Root>
          <Button.Root style={{ height: 150 }}>
            <Button.Title>Tarefas</Button.Title>
            <Button.Icon icon={IconTicket} />
          </Button.Root>
        </View>
      </ScrollView>
    </View>
  );
}
