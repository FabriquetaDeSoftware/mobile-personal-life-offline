import { View } from 'react-native';
import { Button } from '../../components/button';
import { router } from 'expo-router';
import { useState } from 'react';
import { Cards } from '@/src/components/cards';
import { colors } from '@/src/styles/colors';
import { todoListDatabase } from '@/src/database/useTodolistDatabase';

export default function Finances() {
  const [tasks, setTasks] = useState<todoListDatabase[]>([]);

  return (
    <View style={{ flex: 1, padding: 40, gap: 40, marginTop: 24 }}>
      <Cards data={tasks} />

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button.Root
          onPress={() => router.back()}
          style={{ width: '50%', backgroundColor: colors.gray[500] }}
        >
          <Button.Title>Voltar</Button.Title>
        </Button.Root>

        <Button.Root style={{ width: '50%' }}>
          <Button.Title>Inserir</Button.Title>
        </Button.Root>
      </View>
    </View>
  );
}
