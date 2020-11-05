import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert } from 'react-native';

type TaskItem = {
  title: string;
};

export default function App() {

  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    setTasks([
      {title: 'Task1'},
      {title: 'Task2'},
      {title: 'Task3'},
    ]);
  }, []);

  const handlePress = () => {
    const newNameList = tasks.slice();
    newNameList.push({title: inputText});
    setTasks(newNameList);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
      <FlatList
        data={tasks}
        renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
      />
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
});
