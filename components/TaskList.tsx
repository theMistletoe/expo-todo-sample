import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { TaskItem } from '../types/TaskItem';
import Task from './Task';

type Props = {
    tasks: TaskItem[];
}

const TaskList = (props: Props) => {
    const navigation = useNavigation(); // (2)
    return (
        <FlatList
            data={props.tasks}
            renderItem={({item, index}) => {
                return <Task task={item} index={index} />;
            }}
        />
    );
};

export default TaskList;