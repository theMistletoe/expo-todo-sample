import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TaskDescription from '../components/TaskDescription';
import { TaskItem } from '../types/TaskItem';

// TODO ここのrouteの型推論はv5で聞かせられるようになってるらしい
// https://qiita.com/shinnoki/items/e32e20b812606ce7219c
export default function Detail({ route }) {
  const navigation = useNavigation(); // (2)

  const { itemTitle, itemDescription } = route.params;
  const task:TaskItem = {
    title: itemTitle,
    description: itemDescription,
  };

  const handlePressOnCloseButton = () => {
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <TaskDescription task={task} handlePress={handlePressOnCloseButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
