import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TaskItem } from '../types/TaskItem';

type Props = {
    task: TaskItem;
    index: number;
}

const Task = (props: Props) => {
    const navigation = useNavigation(); // (2)
    // TODO: deleteボタンの実装
    const handlePressOnTaskTitle = () => {
      navigation.navigate(
        'Detail',
        {
          id: props.task.id,
        }
      )
    };

    return (
      <Text
        style={styles.item}
        key={props.index}
        onPress={handlePressOnTaskTitle}
      >
        {props.task.title}
      </Text>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default Task;