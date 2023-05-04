import React from 'react';
import {MySwitch} from './MySwitch';
import {BooleanSwitchValues, props as propsAtom} from './propsAtom';
import {Platform} from 'react-native';

export function BooleanSwitch(props: {
  prop: keyof typeof propsAtom;
  only?: typeof Platform.OS;
  defaultValueLabel: string;
}) {
  return (
    <MySwitch<BooleanSwitchValues>
      {...props}
      values={[undefined, false, true] as const}
    />
  );
}
