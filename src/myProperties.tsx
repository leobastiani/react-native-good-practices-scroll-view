import React from 'react';
import {Text, View} from 'react-native';
import properties from './properties.json';
import {getCircularReplacer} from './getCircularReplacer';

const StickyHeaderComponent = properties.find(
  ({name}) => name === 'StickyHeaderComponent',
)!;
StickyHeaderComponent.values = [
  (props: any) => (
    <View>
      <Text>{JSON.stringify(props, getCircularReplacer(), 2)}</Text>
    </View>
  ),
] as any;

const refreshControl = properties.find(({name}) => name === 'refreshControl')!;
refreshControl.values = [
  <View>
    <Text>Refreshing</Text>
  </View>,
] as any;

export default properties;
