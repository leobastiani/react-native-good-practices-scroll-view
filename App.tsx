import {useAtomValue} from 'jotai';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {propsAtom} from './src/propsAtom';
import {BooleanSwitch} from './src/BooleanSwitch';

function App(): JSX.Element {
  const scrollViewProps = useAtomValue(propsAtom);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView {...scrollViewProps}>
        {/* <BooleanSwitch prop="StickyHeaderComponent" /> */}
        {/* <BooleanSwitch prop="alwaysBounceHorizontal" /> */}
        {/* <BooleanSwitch prop="alwaysBounceVertical" /> */}
        {/* <BooleanSwitch prop="automaticallyAdjustContentInsets" /> */}
        {/* <BooleanSwitch prop="automaticallyAdjustKeyboardInsets" /> */}
        {/* <BooleanSwitch prop="automaticallyAdjustsScrollIndicatorInsets" /> */}
        <BooleanSwitch prop="bounces" iosOnly defaultValueLabel="true" />
        {/* <BooleanSwitch prop="bouncesZoom" /> */}
        {/* <BooleanSwitch prop="canCancelContentTouches" /> */}
        {/* <BooleanSwitch prop="centerContent" /> */}
        {/* <BooleanSwitch prop="contentContainerStyle" /> */}
        {/* <BooleanSwitch prop="contentInset" /> */}
        {/* <BooleanSwitch prop="contentInsetAdjustmentBehavior" /> */}
        {/* <BooleanSwitch prop="contentOffset" /> */}
        {/* <BooleanSwitch prop="decelerationRate" /> */}
        {/* <BooleanSwitch prop="directionalLockEnabled" /> */}
        {/* <BooleanSwitch prop="disableIntervalMomentum" /> */}
        {/* <BooleanSwitch prop="disableScrollViewPanResponder" /> */}
        {/* <BooleanSwitch prop="endFillColor" /> */}
        {/* <BooleanSwitch prop="fadingEdgeLength" /> */}
        {/* <BooleanSwitch prop="horizontal" /> */}
        {/* <BooleanSwitch prop="indicatorStyle" /> */}
        {/* <BooleanSwitch prop="invertStickyHeaders" /> */}
        {/* <BooleanSwitch prop="keyboardDismissMode" /> */}
        {/* <BooleanSwitch prop="keyboardShouldPersistTaps" /> */}
        {/* <BooleanSwitch prop="maintainVisibleContentPosition" /> */}
        {/* <BooleanSwitch prop="maximumZoomScale" /> */}
        {/* <BooleanSwitch prop="minimumZoomScale" /> */}
        {/* <BooleanSwitch prop="nestedScrollEnabled" /> */}
        {/* <BooleanSwitch prop="onContentSizeChange" /> */}
        {/* <BooleanSwitch prop="onMomentumScrollBegin" /> */}
        {/* <BooleanSwitch prop="onMomentumScrollEnd" /> */}
        {/* <BooleanSwitch prop="onScroll" /> */}
        {/* <BooleanSwitch prop="onScrollBeginDrag" /> */}
        {/* <BooleanSwitch prop="onScrollEndDrag" /> */}
        {/* <BooleanSwitch prop="onScrollToTop" /> */}
        {/* <BooleanSwitch prop="overScrollMode" /> */}
        {/* <BooleanSwitch prop="pagingEnabled" /> */}
        {/* <BooleanSwitch prop="persistentScrollbar" /> */}
        {/* <BooleanSwitch prop="pinchGestureEnabled" /> */}
        {/* <BooleanSwitch prop="refreshControl" /> */}
        {/* <BooleanSwitch prop="removeClippedSubviews" /> */}
        {/* <BooleanSwitch prop="scrollEnabled" /> */}
        {/* <BooleanSwitch prop="scrollEventThrottle" /> */}
        {/* <BooleanSwitch prop="scrollIndicatorInsets" /> */}
        {/* <BooleanSwitch prop="scrollPerfTag" /> */}
        {/* <BooleanSwitch prop="scrollToOverflowEnabled" /> */}
        {/* <BooleanSwitch prop="scrollsToTop" /> */}
        {/* <BooleanSwitch prop="showsHorizontalScrollIndicator" /> */}
        {/* <BooleanSwitch prop="showsVerticalScrollIndicator" /> */}
        {/* <BooleanSwitch prop="snapToAlignment" /> */}
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
