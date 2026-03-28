/**
 * Type-safe event emitter for editor bridge events
 * 
 * @template T - Event map type
 */
export class EventEmitter<T extends Record<string, any>> {
  private listeners: Map<keyof T, Set<(data: any) => void>>

  constructor() {
    this.listeners = new Map()
  }

  /**
   * Subscribe to an event
   * 
   * @param event - Event name
   * @param callback - Event handler
   */
  on<K extends keyof T>(event: K, callback: (data: T[K]) => void): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }
    this.listeners.get(event)!.add(callback)
  }

  /**
   * Unsubscribe from an event
   * 
   * @param event - Event name
   * @param callback - Event handler
   */
  off<K extends keyof T>(event: K, callback: (data: T[K]) => void): void {
    const callbacks = this.listeners.get(event)
    if (callbacks) {
      callbacks.delete(callback)
      if (callbacks.size === 0) {
        this.listeners.delete(event)
      }
    }
  }

  /**
   * Emit an event to all subscribers
   * 
   * @param event - Event name
   * @param data - Event data
   */
  emit<K extends keyof T>(event: K, data: T[K]): void {
    const callbacks = this.listeners.get(event)
    if (callbacks) {
      callbacks.forEach(callback => {
        try {
          callback(data)
        } catch (error) {
          console.error(`EventEmitter: Error in event handler for "${String(event)}"`, error)
        }
      })
    }
  }

  /**
   * Subscribe to an event once
   * 
   * @param event - Event name
   * @param callback - Event handler
   */
  once<K extends keyof T>(event: K, callback: (data: T[K]) => void): void {
    const onceCallback = (data: T[K]) => {
      callback(data)
      this.off(event, onceCallback)
    }
    this.on(event, onceCallback)
  }

  /**
   * Remove all listeners for a specific event or all events
   * 
   * @param event - Optional event name
   */
  removeAllListeners(event?: keyof T): void {
    if (event) {
      this.listeners.delete(event)
    } else {
      this.listeners.clear()
    }
  }

  /**
   * Get listener count for an event
   * 
   * @param event - Event name
   * @returns Number of listeners
   */
  listenerCount(event: keyof T): number {
    const callbacks = this.listeners.get(event)
    return callbacks ? callbacks.size : 0
  }
}
