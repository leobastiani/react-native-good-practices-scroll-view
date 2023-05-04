import {useAtom} from 'jotai';
import React from 'react';
import {Platform, Pressable, Switch, Text, View} from 'react-native';
import {props} from './propsAtom';
import properties from './myProperties';

export function MySwitch({prop}: {prop: string}) {
  const property = properties.find(({name}) => name === prop)!;
  const only = property.only ?? '';
  const values = property.values;
  const [value, setValue] = useAtom(props[property.name]);
  const defaultValueLabel = property.defaultValueLabel;
  const handleChange = () => {
    // @ts-ignore
    setValue(value => {
      const newValue = (() => {
        if (!values) {
          if (value === undefined) {
            return false;
          }
          if (value === false) {
            return true;
          }
          return undefined;
        }
        if (value === undefined) {
          return values[0];
        }
        // @ts-ignore
        const nextIndex = values.indexOf(value) + 1;
        if (nextIndex === values.length) {
          return undefined;
        }
        return values[nextIndex];
      })();
      console.log(`${property.name}:`, newValue);
      return newValue;
    });
  };
  return (
    <View
      style={{margin: 20, flexDirection: 'row', borderWidth: 1, padding: 10}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>{prop}</Text>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        {!values ? (
          <Switch
            onValueChange={handleChange}
            disabled={Platform.OS !== only}
            value={!!value}
          />
        ) : (
          <Pressable onPress={handleChange}>
            <Text style={{fontSize: 32}}>{String(value)}</Text>
          </Pressable>
        )}
        <Text>
          {only && Platform.OS !== only
            ? `${only}Only`
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
