import {useAtomValue} from 'jotai';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {propsAtom} from './src/propsAtom';
import {BooleanSwitch} from './src/BooleanSwitch';
import properties from './src/properties.tsx';

function App(): JSX.Element {
  const scrollViewProps = useAtomValue(propsAtom);
  console.log('scrollViewProps:', scrollViewProps);
  console.log('properties:', properties);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView {...scrollViewProps}>
        <BooleanSwitch
          prop="alwaysBounceHorizontal"
          only="ios"
          defaultValueLabel={scrollViewProps.horizontal ? 'true' : 'false'}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
