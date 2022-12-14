import Provider from './components/Provider'
import type { ProviderProps } from './components/Provider'
import connect from './components/connect'
import type {
  Connect,
  ConnectProps,
  ConnectedProps,
} from './components/connect'
import type {
  SelectorFactory,
  Selector,
  MapStateToProps,
  MapStateToPropsFactory,
  MapStateToPropsParam,
  MapDispatchToPropsFunction,
  MapDispatchToProps,
  MapDispatchToPropsFactory,
  MapDispatchToPropsParam,
  MapDispatchToPropsNonObject,
  MergeProps,
} from './connect/selectorFactory'
import { ReactReduxContext } from './components/Context'
import type { ReactReduxContextValue } from './components/Context'

import { useDispatch, createDispatchHook } from './hooks/useDispatch'
import { useSelector, createSelectorHook } from './hooks/useSelector'
import { useStore, createStoreHook } from './hooks/useStore'

import shallowEqual from './utils/shallowEqual'
import type { Subscription } from './utils/Subscription'

export * from './types'
export type {
  ProviderProps,
  SelectorFactory,
  Selector,
  MapStateToProps,
  MapStateToPropsFactory,
  MapStateToPropsParam,
  Connect,
  ConnectProps,
  ConnectedProps,
  MapDispatchToPropsFunction,
  MapDispatchToProps,
  MapDispatchToPropsFactory,
  MapDispatchToPropsParam,
  MapDispatchToPropsNonObject,
  MergeProps,
  ReactReduxContextValue,
  Subscription,
}
export {
  Provider,
  ReactReduxContext,
  connect,
  useDispatch,
  createDispatchHook,
  useSelector,
  createSelectorHook,
  useStore,
  createStoreHook,
  shallowEqual,
}
