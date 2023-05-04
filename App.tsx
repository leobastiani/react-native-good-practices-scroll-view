import {useAtomValue} from 'jotai';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {MySwitch} from './src/MySwitch';
import properties from './src/myProperties';
import {propsAtom} from './src/propsAtom';

function App(): JSX.Element {
  const scrollViewProps = useAtomValue(propsAtom);
  console.log('scrollViewProps:', scrollViewProps);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView {...scrollViewProps}>
        {Object.values(properties).map(property => {
          return <MySwitch key={property.name} prop={property.name} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
