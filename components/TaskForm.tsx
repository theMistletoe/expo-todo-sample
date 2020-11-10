import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/Todo/actions';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState<string>('');

  const handlePress = () => {
    dispatch(addTask(inputText));
    setInputText("");
  };

  return (
    <View>
      <TextInput
        style={{height: 40}}
        placeholder="Type Task Title here!"
        onChangeText={text => setInputText(text)}
        value={inputText}
      />
      <Button
        title="Save"
        onPress={handlePress}
      />
    </View>
  );
};

export default TaskForm;