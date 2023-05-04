import React from 'react';
import {MySwitch} from './MySwitch';
import {BooleanSwitchValues, props as propsAtom} from './propsAtom';

export function BooleanSwitch(props: {
  prop: keyof typeof propsAtom;
  iosOnly?: boolean;
  defaultValueLabel: string;
}) {
  return (
    <MySwitch<BooleanSwitchValues>
      {...props}
      values={[undefined, false, true] as const}
    />
  );
}
