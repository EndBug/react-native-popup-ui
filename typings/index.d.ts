import { Component } from 'react'
import { ViewProps, Animated } from 'react-native'

// #region Root
interface RootProps extends ViewProps {
  style: Record<string, any> | number | any[]
}

export class Root extends Component {
  props: RootProps
  constructor(props: RootProps[''])
  render(): JSX.Element
}
// #endregion

// #region Popup
interface PopupParams {
  title: string
  type: string
  textBody: string
  button: boolean
  buttonText: string
  callback: () => any
  background: string
  timing: number
  autoclose: boolean
  icon: Component
}
type PopupConfig = Partial<PopupParams>
interface PopupState extends PopupParams {
  positionView: Animated.Value
  opacity: Animated.Value
  positionPopup: Animated.Value
  popupHeight: number
}

export class Popup extends Component {
  static popupInstance?: Popup
  static show: (config: PopupConfig) => void
  static hide: () => void

  state: PopupState

  hidePopup: () => void
  defaultCallback: () => void
  handleImage: (type: 'Success' | 'Danger' | 'Warning') => any
  render: () => JSX.Element
}
// #endregion

// #region Toast
interface ToastParams {
  title: string
  text: string
  color: string
  timing: number
  icon: Component
}
type ToastConfig = Partial<ToastParams>
interface ToastState extends ToastParams {
  toast: Animated.Value
}

export class Toast extends Component {
  static toastInstance: Toast
  static show: (config: ToastConfig) => void
  static hide: () => void

  state: ToastState

  start: (config: ToastConfig) => void
  hideToast: () => void
  render: () => JSX.Element
}
// #endregion
