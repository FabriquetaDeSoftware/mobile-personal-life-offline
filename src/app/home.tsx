import { ScrollView, View } from 'react-native';
import {
  IconCalendarTime,
  IconChecklist,
  IconCoin,
} from '@tabler/icons-react-native';
import { Button } from '../components/button';
import { Welcome } from '../components/welcome';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ gap: 40 }}>
          <Button.Root style={{ height: 150 }}>
            <Button.Title>Finanças</Button.Title>
            <Button.Icon icon={IconCoin} />
          </Button.Root>
          <Button.Root style={{ height: 150 }}>
            <Button.Title>Agenda</Button.Title>
            <Button.Icon icon={IconCalendarTime} />
          </Button.Root>
          <Button.Root
            onPress={() => router.navigate(`/todo.list`)}
            style={{ height: 150 }}
          >
            <Button.Title>Tarefas</Button.Title>
            <Button.Icon icon={IconChecklist} />
          </Button.Root>
        </View>
      </ScrollView>
    </View>
  );
}
