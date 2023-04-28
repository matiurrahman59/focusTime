import { useKeepAwake } from 'expo-keep-awake';
import React, { useState } from 'react';
import { Text, Vibration, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { Countdown } from './Countdown';
import RoundedButton from './RoundedButton';
import Timing from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  // 1 * ONE_SECOND_IN_MS,
  // 1 * ONE_SECOND_IN_MS,
  // 1 * ONE_SECOND_IN_MS,
  // 1 * ONE_SECOND_IN_MS,
];

const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View className='flex-1 items-center'>
      {/* CountDown timer */}
      <View className='h-[40%] justify-center'>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />

        <View className='pt-10'>
          <Text className='text-center font-bold tracking-widest text-white'>
            Focusing on:
          </Text>
          <Text className='text-center text-white opacity-50'>
            {focusSubject}
          </Text>
        </View>
      </View>

      <View className='w-full items-center space-y-8'>
        {/* ProgressBar */}
        <View className='w-full'>
          <ProgressBar className='h-2 bg-progressBar' progress={progress} />
        </View>

        {/* Timing button */}
        <View className='flex-row opacity-75'>
          <Timing onChangeTime={setMinutes} />
        </View>

        {/* Countdown button container */}
        <View>
          {!isStarted && (
            <RoundedButton
              title='Start'
              size={125}
              onPress={() => setIsStarted(true)}
            />
          )}

          {isStarted && (
            <RoundedButton
              title='Pause'
              size={125}
              onPress={() => setIsStarted(false)}
            />
          )}
        </View>

        {/* Cancel Button */}
        <View className='opacity-75'>
          <RoundedButton
            title='-'
            size={65}
            textStyle='text-4xl'
            onPress={clearSubject}
          />
        </View>
      </View>
    </View>
  );
};

export default Timer;
