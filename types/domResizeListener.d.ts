/* type alias */
type OperateCallback = (el: HTMLElement) => void
type ResizeObserverInstance = ResizeObserver | null
type RemoveTarget = HTMLElement | OperateCallback

declare class DomResizeListener {
  /* private attribute */
  private doms: HTMLElement[]
  private callbacks: OperateCallback[]
  private widths: number[]
  private heights: number[]
  private compatibleWithResizeObserver: boolean
  private resizeObserverInstance: ResizeObserverInstance

  /* private method */
  private resizeObserverCall (entries: ResizeObserverEntry[]): void
  private resizeCall (): void
  private init (): void

  /* public method */
  public addListener (dom: HTMLElement, callback: OperateCallback): void
  public remove (target: RemoveTarget): void
  public clear (): void
}

export as namespace DomResizeListener
export default DomResizeListener
