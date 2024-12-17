import { ScrollView, View } from 'react-native';
import { Button } from '../../components/button';
import { router } from 'expo-router';
import { Categories } from '@/src/components/categories';
import { useState } from 'react';
import { Card } from '@/src/components/list.card/card';
import { Input } from '@/src/components/input';

export default function TodoLists() {
  const categories = [
    { id: '1', name: 'Concluidos' },
    { id: '2', name: 'Pendentes' },
    { id: '3', name: 'Excluidos' },
  ];

  const tasks = [
    { id: '1', name: 'Concluidos', status: 'Concluido' },
    { id: '2', name: 'Pendentes', status: 'Pendente' },
    { id: '3', name: 'Excluidos', status: 'Excluido' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('2');

  const handleSelectCategory = (id: string) => {
    setSelectedCategory(id);
  };

  return (
    <View style={{ flex: 1, padding: 40, gap: 40, marginTop: 24 }}>
      <View style={{ gap: 10 }}>
        <Categories
          data={categories}
          selected={selectedCategory}
          onSelect={handleSelectCategory}
          style={{ flex: 1, justifyContent: 'space-between' }}
        />
        <Input />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ gap: 40 }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
      <Button.Root onPress={() => router.back()}>
        <Button.Title>Voltar</Button.Title>
      </Button.Root>
    </View>
  );
}
