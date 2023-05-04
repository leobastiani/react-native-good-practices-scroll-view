import {useAtom} from 'jotai';
import React from 'react';
import {Platform, Switch, Text, View} from 'react-native';
import {props} from './propsAtom';

export function MySwitch<Values>({
  prop,
  values,
  iosOnly = false,
  defaultValueLabel = '',
}: {
  prop: keyof typeof props;
  iosOnly?: boolean;
  defaultValueLabel: string;
  values: readonly Values[];
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
            // @ts-ignore
            setValue(value => {
              // @ts-ignore
              return values[(values.indexOf(value) + 1) % values.length];
            });
          }}
          disabled={iosOnly && Platform.OS !== 'ios'}
          value={!!value}
        />
        <Text>
          {iosOnly && Platform.OS !== 'ios'
            ? 'iosOnly'
            : String(value) +
              `${
                defaultValueLabel && value === undefined
                  ? `(${defaultValueLabel})`
                  : ''
              }`}
        </Text>
      </View>
    </View>
  );
}
