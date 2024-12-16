import { ScrollView, Text, View } from 'react-native';
import { Button } from '../../components/button';
import { router } from 'expo-router';
import { Categories } from '@/src/components/categories';
import { useState } from 'react';

export default function TodoLists() {
  const categories = [
    { id: '1', name: 'Concluidos' },
    { id: '2', name: 'Pendentes' },
    { id: '3', name: 'Excluidos' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('1');

  const handleSelectCategory = (id: string) => {
    setSelectedCategory(id);
  };

  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Categories
        data={categories}
        selected={selectedCategory}
        onSelect={handleSelectCategory}
        style={{ flex: 1, justifyContent: 'space-between' }}
      />
      <Button.Root onPress={() => router.back()}>
        <Button.Title>Voltar</Button.Title>
      </Button.Root>
    </View>
  );
}
