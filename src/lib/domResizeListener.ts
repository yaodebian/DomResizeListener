/* dom resize watcher class */

/* Compatible with requestAnimationFrame */
import './requestAnimationFrame'
/* check if a javascript object is an element node */
import { isElement } from './checkDom'

/* type alias */
type OperateCallback = (el: HTMLElement) => void
type ResizeObserverInstance = ResizeObserver | null
type RemoveTarget = HTMLElement | OperateCallback

export default class DomResizeListener {
  /* private attribute */
  private doms: HTMLElement[] = []
  private callbacks: OperateCallback[] = []
  private widths: number[] = []
  private heights: number[] = []
  private compatibleWithResizeObserver: boolean = typeof ResizeObserver === 'function'
  private resizeObserverInstance: ResizeObserverInstance = null

  /* private method - ResizeObserver: if size change, excute callback */
  private resizeObserverCall = (entries: ResizeObserverEntry[]): void => {
    const len = entries.length
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < this.doms.length; j++) {
        if (entries[i].target === this.doms[j]) {
          this.callbacks[j](this.doms[j])
        }
      }
    }
  }

  /* private method - requestAnimationFrame: if size change, excute callback */
  private resizeCall = (): void => {
    const len = this.doms.length
    if (len === 0) { // stop callback when nothing to listen
      return
    }

    for (let i = 0; i < len; i++) {
      let tempWidth: number
      let tempHeight: number
      try {
        tempWidth = this.doms[i].clientWidth
        tempHeight = this.doms[i].clientHeight
      } catch (error) {
        console.log('error', error)
        continue
      }
      if (tempWidth !== this.widths[i] || tempHeight !== this.heights[i]) {
        this.widths[i] = tempWidth
        this.heights[i] = tempHeight
        this.callbacks[i](this.doms[i])
      }
    }

    window.requestAnimationFrame(this.resizeCall)
  }

  /* private method: init watcher */
  private init (): void {
    requestAnimationFrame(this.resizeCall) // first, get the initial width and height
  }

  /* public method: add listener of a dom */
  public addListener (dom: HTMLElement, callback: OperateCallback): void {
    if (!dom || !callback) { // both dom and callback is required
      throw new Error('Attribute required: attribute dom and callback is required')
    }
    if (isElement(dom) && typeof callback === 'function') { // determine whether dom and callback is effective
      const restart = this.doms.length === 0
      const tempIndex = this.doms.indexOf(dom)
      this.doms.push(dom)
      this.callbacks.push(callback)
      this.widths.push(0)
      this.heights.push(0)
      if (this.compatibleWithResizeObserver && tempIndex === -1) { // if compatible with ResizeObserver
        this.resizeObserverInstance = this.resizeObserverInstance || new ResizeObserver(this.resizeObserverCall)
        this.resizeObserverInstance.observe(dom)
        return
      }
      restart && this.init()
    }
  }

  /* public method: remove dom listener */
  public remove (target: RemoveTarget): void {
    const checkIsElement = isElement(target)
    const targetList: RemoveTarget[] = (checkIsElement ? this.doms : this.callbacks)
    let index = targetList.indexOf(target)
    const tempDom = this.doms[index]
    while (index > -1) {
      this.doms.splice(index, 1)
      this.callbacks.splice(index, 1)
      this.widths.splice(index, 1)
      this.heights.splice(index, 1)
      index = targetList.indexOf(target)
    }
    if (this.compatibleWithResizeObserver && this.resizeObserverInstance) {
      this.resizeObserverInstance.unobserve(tempDom)
      if (this.doms.length === 0) {
        this.resizeObserverInstance = null
      }
    }
  }

  /* public method: remove all listener */
  public clear (): void {
    this.doms = []
    this.callbacks = []
    this.widths = []
    this.heights = []
    if (this.compatibleWithResizeObserver && this.resizeObserverInstance) {
      this.resizeObserverInstance.disconnect()
      this.resizeObserverInstance = null
    }
  }

  constructor (dom?: HTMLElement, callback?: OperateCallback) {
    if (dom && callback) {
      this.addListener(dom, callback) // add listener
    }
  }
}
