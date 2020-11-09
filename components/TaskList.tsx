import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { TaskItem } from '../types/TaskItem';

type Props = {
    tasks: TaskItem[];
}

const TaskList = (props: Props) => {
    const navigation = useNavigation(); // (2)
    return (
        <>
            <FlatList
                data={props.tasks}
                renderItem={({item, index}) => <Text style={styles.item} key={index} onPress={() => {
                    navigation.navigate(
                        'Detail',
                        {
                            itemTitle: item.title,
                            itemDescription: item.description,
                        }
                    )}}>{item.title}</Text>}
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