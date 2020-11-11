import React from 'react';
import { StyleSheet, View, Button, GestureResponderEvent, TextInput } from 'react-native';
import { TaskItem } from '../types/TaskItem';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/Todo/actions';
import { useNavigation } from '@react-navigation/native';

type Props = {
    task: TaskItem;
    handlePress: (event: GestureResponderEvent) => void;
}

const TaskDescription = (props: Props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleOnChangeTitle = (title: string) => {
        const updatedTask: TaskItem = {
            ...props.task,
            title
        }
        dispatch(updateTask(updatedTask));
    }

    const handleOnChangeDescription = (description: string) => {
        const updatedTask: TaskItem = {
            ...props.task,
            description
        }
        dispatch(updateTask(updatedTask));
    }

    const handlePressOnDeleteButton = () => {
        dispatch(deleteTask(props.task.id));
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.item}
                onChangeText={handleOnChangeTitle}
                value={props.task.title}
            />
            <TextInput
                multiline = {true}
                numberOfLines = {4}
                style={styles.itemdesc}
                onChangeText={handleOnChangeDescription}
                value={props.task.description}
            />
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.item}>
                    <Button title="close" onPress={props.handlePress}/>
                </View>
                <View style={styles.item}>
                    {/* TODO スマホでこのボタンから削除実行すると死ぬ */}
                    <Button color='red' title="Delete" onPress={handlePressOnDeleteButton} />
                </View>
            </View>
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
    itemdesc: {
        padding: 10,
        fontSize: 18,
        height: 80,
    },
});

export default TaskDescription;