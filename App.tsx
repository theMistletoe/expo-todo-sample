import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Modal, TouchableHighlight, GestureResponderEvent } from 'react-native';
import { TaskItem } from './types/TaskItem';
import TaskList from './components/TaskList';
import TaskDescription from './components/TaskDescription';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation(); // (2)
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Home Screen</Text>
      <Button
        title="詳細へ"
        onPress={() => navigation.navigate('Detail')} />{/* (3) */}
    </View>
  );
}

function DetailScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Detail Screen</Text>
    </View>
  );
}

// (1) StackNavigatorを生成する
const Stack = createStackNavigator();


export default function App() {

  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    setTasks([
      {title: 'Task1', description: "description1"},
      {title: 'Task2', description: "description2"},
      {title: 'Task3', description: "description3"},
    ]);
  }, []);

  const handlePress = () => {
    const newNameList = tasks.slice();
    newNameList.push({title: inputText, description: ""});
    setTasks(newNameList);
  };

  const handlePressTaskItem = (index: number) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };

  const handlePressModalCloseButton = () => {
    setModalVisible(!modalVisible);
  };

  return (
    // <View style={styles.container}>
    //   <Modal
    //     animationType="slide"
    //     transparent={true}
    //     visible={modalVisible}
    //     onRequestClose={() => {
    //       Alert.alert("Modal has been closed.");
    //     }}
    //   >
    //     <View style={styles.centeredView}>
    //       <View style={styles.modalView}>
    //         <TaskDescription task={tasks[selectedIndex]} handlePress={handlePressModalCloseButton} />
    //       </View>
    //     </View>
    //   </Modal>
    //   <TextInput
    //     style={{height: 40}}
    //     placeholder="Type here to translate!"
    //     onChangeText={text => setInputText(text)}
    //     value={inputText}
    //   />
    //   <Button
    //     title="Press me"
    //     onPress={handlePress}
    //   />
    //   <TaskList tasks={tasks} handlePressTaskItem={handlePressTaskItem} />
    // </View>
    <NavigationContainer>
      {/* (1) 画面遷移対象のアプリケーションコード */}
      <Stack.Navigator initialRouteName="Home">
        {/* (2) StackNavigator用の画面を定義する */}
        <Stack.Screen
          name="Home"
          component={HomeScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
