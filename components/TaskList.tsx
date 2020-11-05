import React from 'react';
import { StyleSheet, Text, FlatList, GestureResponderEvent } from 'react-native';
import { TaskItem } from '../types/TaskItem';

type Props = {
    tasks: TaskItem[];
    handlePressTaskItem: (index: number) => void;
}

const TaskList = (props: Props) => {
    return (
        <>
            <FlatList
                data={props.tasks}
                renderItem={({item, index}) => <Text style={styles.item} key={index} onPress={() => props.handlePressTaskItem(index)}>{item.title}</Text>}
            />
        </>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default TaskList;