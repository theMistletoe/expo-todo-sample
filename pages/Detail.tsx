import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import TaskDescription from '../components/TaskDescription';
import { TaskItem } from '../types/TaskItem';

// TODO ここのrouteの型推論はv5で聞かせられるようになってるらしい
// https://qiita.com/shinnoki/items/e32e20b812606ce7219c
export default function Detail({ route }) {
  const navigation = useNavigation(); // (2)
  const getData = useSelector((state: any) => state);

  const { id } = route.params;
  const task: TaskItem = getData.todos.find((task: TaskItem) => task.id === id)

  const handlePressOnCloseButton = () => {
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <TaskDescription
        task={task}
        handlePress={handlePressOnCloseButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
