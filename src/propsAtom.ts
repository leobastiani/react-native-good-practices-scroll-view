import {atom} from 'jotai';

import * as _ from 'radash';
import {ScrollView} from 'react-native';
export type BooleanSwitchValues = boolean | undefined;

type ScrollViewProps = React.ComponentProps<typeof ScrollView>;

export const props = {
  bounces: atom(undefined as BooleanSwitchValues),
};
export const propsAtom = atom(get => {
  const ret: ScrollViewProps = {
    bounces: get(props.bounces),
    style: {flex: 1},
    contentContainerStyle: {
      flex: 1,
    },
  };

  return Object.fromEntries(
    Object.entries(ret).filter(([, value]) => value !== undefined),
  ) as ScrollViewProps;
});
