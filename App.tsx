import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert } from 'react-native';

type nameItem = {
  key: string;
};

export default function App() {

  const [name, setName] = useState<nameItem[]>([]);
  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    setName([
      {key: 'Devin'},
      {key: 'Dan'},
      {key: 'Dominic'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
    ]);
  }, []);

  const handlePress = () => {
    const newNameList = name.slice();
    newNameList.push({key: inputText});
    setName(newNameList);
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
        data={name}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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
