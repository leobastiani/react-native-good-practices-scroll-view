import {atom} from 'jotai';

import {ScrollView} from 'react-native';
export type BooleanSwitchValues = boolean | undefined;

type ScrollViewProps = React.ComponentProps<typeof ScrollView>;

export const props = {
  // StickyHeaderComponent: atom(undefined as BooleanSwitchValues),
  // alwaysBounceHorizontal: atom(undefined as BooleanSwitchValues),
  // alwaysBounceVertical: atom(undefined as BooleanSwitchValues),
  // automaticallyAdjustContentInsets: atom(undefined as BooleanSwitchValues),
  // automaticallyAdjustKeyboardInsets: atom(undefined as BooleanSwitchValues),
  // automaticallyAdjustsScrollIndicatorInsets: atom(undefined as BooleanSwitchValues),
  bounces: atom(undefined as BooleanSwitchValues),
  // bouncesZoom: atom(undefined as BooleanSwitchValues),
  // canCancelContentTouches: atom(undefined as BooleanSwitchValues),
  // centerContent: atom(undefined as BooleanSwitchValues),
  // contentContainerStyle: atom(undefined as BooleanSwitchValues),
  // contentInset: atom(undefined as BooleanSwitchValues),
  // contentInsetAdjustmentBehavior: atom(undefined as BooleanSwitchValues),
  // contentOffset: atom(undefined as BooleanSwitchValues),
  // decelerationRate: atom(undefined as BooleanSwitchValues),
  // directionalLockEnabled: atom(undefined as BooleanSwitchValues),
  // disableIntervalMomentum: atom(undefined as BooleanSwitchValues),
  // disableScrollViewPanResponder: atom(undefined as BooleanSwitchValues),
  // endFillColor: atom(undefined as BooleanSwitchValues),
  // fadingEdgeLength: atom(undefined as BooleanSwitchValues),
  // horizontal: atom(undefined as BooleanSwitchValues),
  // indicatorStyle: atom(undefined as BooleanSwitchValues),
  // invertStickyHeaders: atom(undefined as BooleanSwitchValues),
  // keyboardDismissMode: atom(undefined as BooleanSwitchValues),
  // keyboardShouldPersistTaps: atom(undefined as BooleanSwitchValues),
  // maintainVisibleContentPosition: atom(undefined as BooleanSwitchValues),
  // maximumZoomScale: atom(undefined as BooleanSwitchValues),
  // minimumZoomScale: atom(undefined as BooleanSwitchValues),
  // nestedScrollEnabled: atom(undefined as BooleanSwitchValues),
  // onContentSizeChange: atom(undefined as BooleanSwitchValues),
  // onMomentumScrollBegin: atom(undefined as BooleanSwitchValues),
  // onMomentumScrollEnd: atom(undefined as BooleanSwitchValues),
  // onScroll: atom(undefined as BooleanSwitchValues),
  // onScrollBeginDrag: atom(undefined as BooleanSwitchValues),
  // onScrollEndDrag: atom(undefined as BooleanSwitchValues),
  // onScrollToTop: atom(undefined as BooleanSwitchValues),
  // overScrollMode: atom(undefined as BooleanSwitchValues),
  // pagingEnabled: atom(undefined as BooleanSwitchValues),
  // persistentScrollbar: atom(undefined as BooleanSwitchValues),
  // pinchGestureEnabled: atom(undefined as BooleanSwitchValues),
  // refreshControl: atom(undefined as BooleanSwitchValues),
  // removeClippedSubviews: atom(undefined as BooleanSwitchValues),
  // scrollEnabled: atom(undefined as BooleanSwitchValues),
  // scrollEventThrottle: atom(undefined as BooleanSwitchValues),
  // scrollIndicatorInsets: atom(undefined as BooleanSwitchValues),
  // scrollPerfTag: atom(undefined as BooleanSwitchValues),
  // scrollToOverflowEnabled: atom(undefined as BooleanSwitchValues),
  // scrollsToTop: atom(undefined as BooleanSwitchValues),
  // showsHorizontalScrollIndicator: atom(undefined as BooleanSwitchValues),
  // showsVerticalScrollIndicator: atom(undefined as BooleanSwitchValues),
  // snapToAlignment: atom(undefined as BooleanSwitchValues),
  // snapToEnd: atom(undefined as BooleanSwitchValues),
  // snapToInterval: atom(undefined as BooleanSwitchValues),
  // snapToOffsets: atom(undefined as BooleanSwitchValues),
  // snapToStart: atom(undefined as BooleanSwitchValues),
  // stickyHeaderHiddenOnScroll: atom(undefined as BooleanSwitchValues),
  // stickyHeaderIndices: atom(undefined as BooleanSwitchValues),
  // zoomScale: atom(undefined as BooleanSwitchValues),
};

export const propsAtom = atom(get => {
  const ret: ScrollViewProps = {
    style: {flex: 1},
    contentContainerStyle: {
      flex: 1,
    },
  };

  Object.entries(props).forEach(([key, prop]) => {
    const value = get(prop);
    if (value !== undefined) {
      // @ts-ignore
      ret[key] = value;
    }
  });

  return ret;
});
