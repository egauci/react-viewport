import React, { Component } from 'react'

export default class ReactViewport extends Component {

  tmr = 0
  state = { viewport: {} }
  _isIOS = navigator.platform.search(/iPad|iPhone|iPod/) !== -1

  static defaultProps = {
    milli: 100
  }

  setViewportState = () => {
    this.setState({ viewport: this.getViewport() })
    this.tmr = 0
  }

  handler = () => {
    if (this.tmr) {
      clearTimeout(this.tmr)
    }
    this.tmr = setTimeout(this.setViewportState, this.props.milli)
  }

  componentDidMount() {
    ;['scroll', 'resize'].forEach(e => window.addEventListener(e, this.handler))
    this.handler()
  }
  componentWillUnmount() {
    ;['scroll', 'resize'].forEach(e =>
      window.removeEventListener(e, this.handler)
    )
  }
  render() {
    const func = this.props.render || this.props.children
    return func(this.state.viewport)
  }
  width({ w, h }) {
    const orientation = window.orientation
    if (orientation === undefined) {
      return w
    }
    if (orientation === 0 || orientation === 180) {
      return Math.min(w, h)
    }
    return Math.max(w, h)
  }
  height({ w, h }) {
    const orientation = window.orientation
    if (orientation === undefined) {
      return h
    }
    if (orientation === 0 || orientation === 180) {
      return Math.max(h, w)
    }
    return Math.min(h, w)
  }
  getViewport() {
    const clientWidth =
      document.documentElement.clientWidth ||
      document.body.clientWidth ||
      window.innerWidth
    const height = this.height({ w: window.innerWidth, h: window.innerHeight })
    const clientHeight = this._isIOS
      ? height
      : document.documentElement.clientHeight
    return {
      isIOS: this._isIOS,
      scrollX: window.pageXOffset,
      scrollY: window.pageYOffset,
      width: this.width({ w: window.innerWidth, h: window.innerHeight }),
      height,
      clientWidth: this.width({ w: clientWidth, h: clientHeight }),
      clientHeight: this.height({ w: clientWidth, h: clientHeight })
    }
  }
}
