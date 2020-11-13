import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

type Props = {
  text: string
}

const Sample = (props: Props) => {
  const [number, setNumber] = useState<number>(0);

  const handlePress = () => {
    const updateNumber = number + 1;
    setNumber(updateNumber);
  };

  return (
    <View>
      <Text>
        {props.text}!!!
      </Text>
      <Text>{number}</Text>
      <Button onPress={handlePress} title="increment" />
    </View>
  );
};

export default Sample;