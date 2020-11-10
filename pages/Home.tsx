import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { TaskItem } from '../types/TaskItem';
import TaskList from '../components/TaskList';
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, updateTask } from '../redux/Todo/actions';

export default function App() {

  const getData = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState<string>('');

  const handlePress = () => {
    dispatch(addTask(inputText));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setInputText(text)}
        value={inputText}
      />
      <Button
        title="Press me"
        onPress={handlePress}
      />
      <TaskList tasks={getData.todos} />
    </View>
  );
}

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
