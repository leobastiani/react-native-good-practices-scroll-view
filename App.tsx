import {useAtomValue} from 'jotai';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {propsAtom} from './src/propsAtom';
import {BooleanSwitch} from './src/BooleanSwitch';

function App(): JSX.Element {
  const scrollViewProps = useAtomValue(propsAtom);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView {...scrollViewProps}>
        <BooleanSwitch prop="bounces" iosOnly defaultValueLabel="true" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
