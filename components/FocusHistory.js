import React from 'react';
import { FlatList, Text, View } from 'react-native';

const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text className='text-base font-bold text-white opacity-70'>
        We haven't focused on anything yet!
      </Text>
    );

  const renderItem = ({ item }) => (
    <Text className='text-base font-bold text-white opacity-70'>- {item}</Text>
  );
  return (
    <View className='h-screen'>
      <Text className='text-base font-bold text-white'>
        Things we've focused on:
      </Text>
      <View className='flex-1 pt-2'>
        <FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default FocusHistory;
