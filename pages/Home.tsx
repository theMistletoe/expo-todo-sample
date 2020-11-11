import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { addTaskFromAPI } from '../redux/Todo/actions';

export default function App() {

  const dispatch = useDispatch();
  const getData = useSelector((state: any) => state);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <TaskForm />
      </View>
      <Button
        onPress={() => dispatch(addTaskFromAPI())}
        title="ADD from API"
      />
      <View style={styles.item}>
        <TaskList tasks={getData.todos} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  item: {
    marginBottom: 10,
    marginTop: 10,
  },
});
