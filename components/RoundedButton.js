import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const RoundedButton = ({ title, onPress, size, textStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles(size).radius}
      className='items-center justify-center rounded-full border border-white'
    >
      <Text className={`text-2xl text-white ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = (size) => ({
  radius: {
    width: size,
    height: size,
  },
});
