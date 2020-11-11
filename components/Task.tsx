import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TaskItem } from '../types/TaskItem';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/Todo/actions';

type Props = {
    task: TaskItem;
    index: number;
}

const Task = (props: Props) => {
    const navigation = useNavigation(); // (2)
    const dispatch = useDispatch();

    const handlePressOnTaskTitle = () => {
      navigation.navigate(
        'Detail',
        {
          id: props.task.id,
        }
      )
    };

    const handlePressOnDeleteButton = () => {
      dispatch(deleteTask(props.task.id));
      navigation.navigate('Home');
    }

    return (
      <View style={styles.container}>
        <Text
          style={styles.item}
          key={props.index}
          onPress={handlePressOnTaskTitle}
          >
          {props.task.title}
        </Text>
        <Button
          title="Delete"
          onPress={handlePressOnDeleteButton}
          />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Task;