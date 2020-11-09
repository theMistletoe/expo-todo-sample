import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskDescription from '../components/TaskDescription';
import { TaskItem } from '../types/TaskItem';

type Props = {
  task: TaskItem;
}

// TODO ここのrouteの型推論はv5で聞かせられるようになってるらしい
// https://qiita.com/shinnoki/items/e32e20b812606ce7219c
export default function Detail({ route }) {
  const { itemTitle, itemDescription } = route.params;
  const task:TaskItem = {
    title: itemTitle,
    description: itemDescription,
  };

  return (
    <View style={styles.container}>
      <TaskDescription task={task} />
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
