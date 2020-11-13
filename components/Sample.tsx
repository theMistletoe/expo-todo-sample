import React from 'react';
import { Text } from 'react-native';

type Props = {
  number: number
}

const Sample = (props: Props) => {

  return (
    <Text>
      {props.number}!!!
    </Text>
  );
};

export default Sample;