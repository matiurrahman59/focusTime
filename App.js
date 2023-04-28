import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

////////////////////////////////////////////////
// Internal Imports
import { useState } from 'react';
import Focus from './components/Focus';
import FocusHistory from './components/FocusHistory';
import Timer from './components/Timer';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container} className='flex-1 bg-darkBlue'>
      {!currentSubject ? (
        <View className='flex-1 space-y-5  p-6'>
          <View>
            <Focus addSubject={setCurrentSubject} />
          </View>
          <View>
            <FocusHistory history={history} />
          </View>
        </View>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
