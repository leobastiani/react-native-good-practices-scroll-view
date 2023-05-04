import {useAtomValue} from 'jotai';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {propsAtom} from './src/propsAtom';
import {BooleanSwitch} from './src/BooleanSwitch';

function App(): JSX.Element {
  const scrollViewProps = useAtomValue(propsAtom);
  console.log('scrollViewProps:', scrollViewProps);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView {...scrollViewProps}>
        {/* <BooleanSwitch prop="StickyHeaderComponent" /> */}
        <BooleanSwitch
          prop="alwaysBounceHorizontal"
          only="ios"
          defaultValueLabel={scrollViewProps.horizontal ? 'true' : 'false'}
        />
        <BooleanSwitch
          prop="alwaysBounceVertical"
          only="ios"
          defaultValueLabel={!scrollViewProps.horizontal ? 'true' : 'false'}
        />
        <BooleanSwitch
          prop="automaticallyAdjustContentInsets"
          only="ios"
          defaultValueLabel="true"
        />
        <BooleanSwitch
          prop="automaticallyAdjustKeyboardInsets"
          only="ios"
          defaultValueLabel="true"
        />
        <BooleanSwitch
          prop="automaticallyAdjustsScrollIndicatorInsets"
          only="ios"
          defaultValueLabel="true"
        />
        <BooleanSwitch prop="bounces" only="ios" defaultValueLabel="true" />
        <BooleanSwitch prop="bouncesZoom" only="ios" defaultValueLabel="true" />
        <BooleanSwitch
          prop="canCancelContentTouches"
          only="ios"
          defaultValueLabel="true"
        />
        <BooleanSwitch
          prop="centerContent"
          only="ios"
          defaultValueLabel="false"
        />
        {/* <BooleanSwitch prop="contentContainerStyle" /> */}
        {/* <BooleanSwitch prop="contentInset" /> */}
        {/* <BooleanSwitch prop="contentInsetAdjustmentBehavior" /> */}
        {/* <BooleanSwitch prop="contentOffset" /> */}
        {/* <BooleanSwitch prop="decelerationRate" /> */}
        <BooleanSwitch
          prop="directionalLockEnabled"
          only="ios"
          defaultValueLabel="false"
        />
        <BooleanSwitch
          prop="disableIntervalMomentum"
          defaultValueLabel="false"
        />
        <BooleanSwitch
          prop="disableScrollViewPanResponder"
          defaultValueLabel="false"
        />
        {/* <BooleanSwitch prop="endFillColor" /> */}
        {/* <BooleanSwitch prop="fadingEdgeLength" /> */}
        <BooleanSwitch prop="horizontal" defaultValueLabel="false" />
        {/* <BooleanSwitch prop="indicatorStyle" /> */}
        <BooleanSwitch prop="invertStickyHeaders" defaultValueLabel="false" />
        {/* <BooleanSwitch prop="keyboardDismissMode" /> */}
        {/* <BooleanSwitch prop="keyboardShouldPersistTaps" /> */}
        {/* <BooleanSwitch prop="maintainVisibleContentPosition" /> */}
        {/* <BooleanSwitch prop="maximumZoomScale" /> */}
        {/* <BooleanSwitch prop="minimumZoomScale" /> */}
        <BooleanSwitch
          prop="nestedScrollEnabled"
          only="android"
          defaultValueLabel="true"
        />
        {/* <BooleanSwitch prop="onContentSizeChange" /> */}
        {/* <BooleanSwitch prop="onMomentumScrollBegin" /> */}
        {/* <BooleanSwitch prop="onMomentumScrollEnd" /> */}
        {/* <BooleanSwitch prop="onScroll" /> */}
        {/* <BooleanSwitch prop="onScrollBeginDrag" /> */}
        {/* <BooleanSwitch prop="onScrollEndDrag" /> */}
        {/* <BooleanSwitch prop="onScrollToTop" /> */}
        {/* <BooleanSwitch prop="overScrollMode" /> */}
        <BooleanSwitch prop="nestedScrollEnabled" defaultValueLabel="false" />
        <BooleanSwitch
          prop="persistentScrollbar"
          only="android"
          defaultValueLabel="false"
        />
        <BooleanSwitch
          prop="pinchGestureEnabled"
          only="ios"
          defaultValueLabel="true"
        />
        {/* <BooleanSwitch prop="refreshControl" /> */}
        <BooleanSwitch prop="removeClippedSubviews" defaultValueLabel="false" />
        <BooleanSwitch prop="scrollEnabled" defaultValueLabel="true" />
        {/* <BooleanSwitch prop="scrollEventThrottle" /> */}
        {/* <BooleanSwitch prop="scrollIndicatorInsets" /> */}
        {/* <BooleanSwitch prop="scrollPerfTag" /> */}
        <BooleanSwitch
          prop="scrollToOverflowEnabled"
          only="ios"
          defaultValueLabel="false"
        />
        <BooleanSwitch
          prop="scrollsToTop"
          only="ios"
          defaultValueLabel="true"
        />
        <BooleanSwitch
          prop="showsHorizontalScrollIndicator"
          defaultValueLabel="true"
        />
        <BooleanSwitch
          prop="showsVerticalScrollIndicator"
          defaultValueLabel="true"
        />
        {/* <BooleanSwitch prop="snapToAlignment" /> */}
        <BooleanSwitch prop="snapToEnd" defaultValueLabel="true" />
        {/* <BooleanSwitch prop="snapToEnd" /> */}
        {/* <BooleanSwitch prop="snapToInterval" /> */}
        {/* <BooleanSwitch prop="snapToOffsets" /> */}
        {/* <BooleanSwitch prop="snapToStart" /> */}
        {/* <BooleanSwitch prop="stickyHeaderHiddenOnScroll" /> */}
        {/* <BooleanSwitch prop="stickyHeaderIndices" /> */}
        {/* <BooleanSwitch prop="zoomScale" /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
