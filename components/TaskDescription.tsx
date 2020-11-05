import React from 'react';
import { StyleSheet, Text, View, Button, GestureResponderEvent } from 'react-native';
import { TaskItem } from '../types/TaskItem';

type Props = {
    task: TaskItem;
    handlePress: (event: GestureResponderEvent) => void;
}

const TaskDescription = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{props.task.title}</Text>
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

export default TaskDescription;