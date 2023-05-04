import {atom} from 'jotai';

import {ScrollView} from 'react-native';
export type BooleanSwitchValues = boolean | undefined;

type ScrollViewProps = React.ComponentProps<typeof ScrollView>;

export const props = {
  StickyHeaderComponent: atom(undefined as unknown),
  alwaysBounceHorizontal: atom(undefined as unknown),
  alwaysBounceVertical: atom(undefined as unknown),
  automaticallyAdjustContentInsets: atom(undefined as unknown),
  automaticallyAdjustKeyboardInsets: atom(undefined as unknown),
  automaticallyAdjustsScrollIndicatorInsets: atom(undefined as unknown),
  bounces: atom(undefined as unknown),
  bouncesZoom: atom(undefined as unknown),
  canCancelContentTouches: atom(undefined as unknown),
  centerContent: atom(undefined as unknown),
  contentContainerStyle: atom(undefined as unknown),
  contentInset: atom(undefined as unknown),
  contentInsetAdjustmentBehavior: atom(undefined as unknown),
  contentOffset: atom(undefined as unknown),
  decelerationRate: atom(undefined as unknown),
  directionalLockEnabled: atom(undefined as unknown),
  disableIntervalMomentum: atom(undefined as unknown),
  disableScrollViewPanResponder: atom(undefined as unknown),
  endFillColor: atom(undefined as unknown),
  fadingEdgeLength: atom(undefined as unknown),
  horizontal: atom(undefined as unknown),
  indicatorStyle: atom(undefined as unknown),
  invertStickyHeaders: atom(undefined as unknown),
  keyboardDismissMode: atom(undefined as unknown),
  keyboardShouldPersistTaps: atom(undefined as unknown),
  maintainVisibleContentPosition: atom(undefined as unknown),
  maximumZoomScale: atom(undefined as unknown),
  minimumZoomScale: atom(undefined as unknown),
  nestedScrollEnabled: atom(undefined as unknown),
  onContentSizeChange: atom(undefined as unknown),
  onMomentumScrollBegin: atom(undefined as unknown),
  onMomentumScrollEnd: atom(undefined as unknown),
  onScroll: atom(undefined as unknown),
  onScrollBeginDrag: atom(undefined as unknown),
  onScrollEndDrag: atom(undefined as unknown),
  onScrollToTop: atom(undefined as unknown),
  overScrollMode: atom(undefined as unknown),
  pagingEnabled: atom(undefined as unknown),
  persistentScrollbar: atom(undefined as unknown),
  pinchGestureEnabled: atom(undefined as unknown),
  refreshControl: atom(undefined as unknown),
  removeClippedSubviews: atom(undefined as unknown),
  scrollEnabled: atom(undefined as unknown),
  scrollEventThrottle: atom(undefined as unknown),
  scrollIndicatorInsets: atom(undefined as unknown),
  scrollPerfTag: atom(undefined as unknown),
  scrollToOverflowEnabled: atom(undefined as unknown),
  scrollsToTop: atom(undefined as unknown),
  showsHorizontalScrollIndicator: atom(undefined as unknown),
  showsVerticalScrollIndicator: atom(undefined as unknown),
  snapToAlignment: atom(undefined as unknown),
  snapToEnd: atom(undefined as unknown),
  snapToInterval: atom(undefined as unknown),
  snapToOffsets: atom(undefined as unknown),
  snapToStart: atom(undefined as unknown),
  stickyHeaderHiddenOnScroll: atom(undefined as unknown),
  stickyHeaderIndices: atom(undefined as unknown),
  zoomScale: atom(undefined as unknown),
};

export const propsAtom = atom(get => {
  const ret: ScrollViewProps = {
    style: {flex: 1},
    contentContainerStyle: {gap: 20},
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
