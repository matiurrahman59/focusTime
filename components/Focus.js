import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import RoundedButton from './RoundedButton';

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState();

  return (
    <View className=' justify-center'>
      <View className='flex-row justify-center gap-x-2'>
        <TextInput
          onChangeText={setSubject}
          className='flex-1'
          label='What would you like to focus on?'
        />

        <View>
          <RoundedButton
            title='+'
            size={55}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

export default Focus;
