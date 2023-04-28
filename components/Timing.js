import React from 'react';
import { View } from 'react-native';
import RoundedButton from './RoundedButton';

const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View className='flex-1 items-center'>
        <RoundedButton size={75} title='2' onPress={() => onChangeTime(2)} />
      </View>
      <View className='flex-1 items-center'>
        <RoundedButton size={75} title='5' onPress={() => onChangeTime(5)} />
      </View>
      <View className='flex-1 items-center'>
        <RoundedButton size={75} title='10' onPress={() => onChangeTime(10)} />
      </View>
    </>
  );
};

export default Timing;
