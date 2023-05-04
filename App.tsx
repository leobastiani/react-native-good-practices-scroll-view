import {useAtom, useAtomValue} from 'jotai';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  View,
} from 'react-native';
import {props, propsAtom} from './src/propsAtom';

function BooleanSwitch({
  prop,
  iosOnly = false,
  defaultValue = '',
}: {
  prop: keyof typeof props;
  iosOnly?: boolean;
  defaultValue: string;
}) {
  const [value, setValue] = useAtom(props[prop]);
  return (
    <View
      style={{margin: 20, flexDirection: 'row', borderWidth: 1, padding: 10}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 24}}>{prop}</Text>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Switch
          onValueChange={() => {
            setValue(value => {
              if (value === undefined) {
                return false;
              }
              if (value === false) {
                return true;
              }
              if (value === true) {
                return undefined;
              }
            });
          }}
          disabled={iosOnly && Platform.OS !== 'ios'}
          value={value ?? false}
        />
        <Text>
          {iosOnly && Platform.OS !== 'ios'
            ? 'iosOnly'
            : String(value) +
              `${
                defaultValue && value === undefined ? `=${defaultValue}` : ''
              }`}
        </Text>
      </View>
    </View>
  );
}

function App(): JSX.Element {
  const scrollViewProps = useAtomValue(propsAtom);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView {...scrollViewProps}>
        <BooleanSwitch prop="bounces" iosOnly defaultValue="true" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
