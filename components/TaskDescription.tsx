import React from 'react';
import { StyleSheet, Text, View, Button, GestureResponderEvent, TextInput } from 'react-native';
import { TaskItem } from '../types/TaskItem';
import { useDispatch } from 'react-redux';
import { updateTask } from '../redux/Todo/actions';

type Props = {
    task: TaskItem;
    handlePress: (event: GestureResponderEvent) => void;
}

const TaskDescription = (props: Props) => {
    const dispatch = useDispatch();

    // TODO 入力に応じてdescのstateをupdateできるようにする
    const handleOnChangeTitle = (title: string) => {
        console.log("chainged", title);
        const updatedTask: TaskItem = {
            ...props.task,
            title
        }
        dispatch(updateTask(updatedTask));
    }
    // TODO deleteボタンの実装
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.item}
                onChangeText={handleOnChangeTitle}
                value={props.task.title}
            />
            <Text style={styles.item}>{props.task.description}</Text>
            <Button title="close" onPress={props.handlePress}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

TaskDescription.defaultProps = {
    task: { title: "", description: ""},
    handlePress: () => {}
}

export default TaskDescription;